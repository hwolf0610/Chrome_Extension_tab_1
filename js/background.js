let slots = [];
let slotUrls = [];
let numTargetTabs = 3;
let popUpsArray = [];

updateMenuItems();
//sorts an array using one if it's keys
function sortByKey(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
/**
 * Events
 **/
chrome.runtime.onStartup.addListener(function () {
  starting();
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  let id = parseInt(info.menuItemId);
  let url = info.linkUrl;
  updateTabs(id, url);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.status == "complete") {
    for (let i = 0; i < slots.length; i++) {
      if (slots[i] && slots[i].id) {
        chrome.tabs.get(slots[i].id, function (tab) {
          slotUrls[i] = tab.url;
          updateUrlsInStorage();
        });
      } else {
        slotUrls[i] = "noUrl";
        updateUrlsInStorage();
      }

      function updateUrlsInStorage() {
        let ttSettings = {};
        ttSettings["slotUrls"] = slotUrls;
        chrome.storage.sync.set({
          ttSettings: ttSettings
        });
      }
    }
  }
});

function getTargetMonitor(selectedSlot, passedMonitors = 0) {
  slotsCount = 0;
  if (passedMonitors == 0)
    passedMonitors = Monitors
  selectedSlot - 1;
  for (m of passedMonitors) {
    var min = slotsCount;
    if (m.useThis != "no")
      slotsCount += m.layout.slots
    var max = slotsCount;
    if (selectedSlot >= min && selectedSlot < max)
      return m;
  }

}

chrome.tabs.onRemoved.addListener(function (tabId, info) {
  for (let i = 0; i < slots.length; i++) {
    if (slots[i] && slots[i].id === tabId) {
      slots[i].id = false;
    }
  }
});

function starting() {
  chrome.storage.sync.get(["ttSettings"], function (result) {
    if (result.ttSettings) {
      slotUrls = result.ttSettings.slotUrls;
      chrome.tabs.query({}, function (tabs) {
        for (let t = 0; t < tabs.length; t++) {
          if (t == 0) {
            slots[0] = {};
            slots[0].id = tabs[t].id;
          }
          for (let u = 0; u < slotUrls.length; u++) {
            if (
              tabs[t].url.endsWith(slotUrls[u]) ||
              tabs[t].url.endsWith(slotUrls[u].slice(0, -1))
            ) {
              slots[u] = {};
              slots[u].id = tabs[t].id;
            }
          }
        }
      });
    }
  });
}

function updateMenuItems() {
  chrome.storage.sync.get(
    ["ttSwitchState", "interfaceType", "numTabs"],
    function (result) {
      numTargetTabs = result.numTabs;
      chrome.contextMenus.removeAll();
      if (
        result.ttSwitchState == "on" &&
        result.interfaceType == "contextMenu"
      ) {
        for (let i = 1; i <= numTargetTabs; i++) {
          chrome.contextMenus.create({
            id: `${i}`,
            title: `Open in Target Tab ${i}`,
            contexts: ["link"]
          });
        }
      }
    }
  );
}

function updateTabs(tabNum, url, selectedMonitor, Monitors, callbackFunction = 0) {
  tabNum = parseInt(tabNum - 1);
  if (slots[tabNum] && slots[tabNum].id) {
    chrome.tabs.get(slots[tabNum].id, function () {
      if (chrome.runtime.lastError) {
        slots[tabNum].id = false;
        createTab(tabNum, url, selectedMonitor, Monitors, callbackFunction);
      } else {
        // createTab(tabNum, url, selectedMonitor,Monitors,callbackFunction);
        chrome.tabs.update(slots[tabNum].id, {
          url: url,
          active: true
        });
      }
    });
  } else {
    createTab(tabNum, url, selectedMonitor, Monitors, callbackFunction);
  }

  function createTab(tabNum, url, selectedMonitor, Monitors, callbackFunction = 0) {
    //disabled because it was generating a wrong behavior
    // if (!slots[0] || slots[0].id == undefined || slots[0].id == false) {
    //   chrome.tabs.query({ active: true, currentWindow: true }, function(d) {
    //     slots[0] = {};
    //     slots[0].id = d[0].id;
    //     arrangeAndSizeWindows(0,selectedMonitor);
    //   });
    // }
    chrome.tabs.create({
      url: url,
      index: tabNum,
      active: false
    }, function (data) {
      slots[tabNum] = {};
      slots[tabNum].id = data.id;
      arrangeAndSizeWindows(tabNum, selectedMonitor, Monitors, callbackFunction);
      chrome.storage.sync.get(["linkDestination"], function (result) {
        if (result.linkDestination == "tab") {
          chrome.tabs.update(data.id, {
            active: true
          })
        }
      });
    });
  }
  chrome.storage.sync.get(["ttClicks"], function (result) {
    let clicks = parseInt(result.ttClicks);
    clicks++;
    chrome.storage.sync.set({
      ttClicks: clicks
    });
  });
}
chrome.storage.onChanged.addListener(function (changes, namespace) {
  updateMenuItems();
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(request.action);
  if (request.action === "updateTab") {
    updateTabs(request.tabNum, request.url, request.monitor, request.Monitors, function (openedWindow) {
      sendResponse({
        response: openedWindow
      });
    });
  }
  if (request.action === "openPopUps") {
    configMonitors();
  }
  if (request.action === "closeAllPopups") {
    closePopUps();
  }
  if (request.action === "abandonTabs") {
    abandonTabs();
  }

  //checks if a specific window is still open in a specific monitor
  if (request.action === "getCurrentMonitor") {
    chrome.windows.getCurrent(function (data) {
      sendResponse({
        response: data
      });

    });
    return true;
  }
  if (request.action === "ifWindowIsStillThere") {
    chrome.windows.get(request.window, function () {
      if (chrome.runtime.lastError) {
        sendResponse({
          response: false
        });
      } else {
        sendResponse({
          response: true
        });
      }
    });
  }
  if (request.action === "openTabInWindow") {
    targetWindow = request.window;
    url = request.url;
    chrome.tabs.create({
      windowId: targetWindow.id,
      url: url
    }, function () {

    })
  }
  if (request.action === "repositionWindow") {
    targetWindow = request.window;
    chrome.windows.update(targetWindow.id, {
      top: parseInt(request.top),
      left: parseInt(request.left),
      width: parseInt(request.width),
      focused: false
    },
      function (data) {
      }
    );
  }
  if (request.action === "openWindowInMonitor") {
    var targetWindow = request.window;
    var url = request.url;
    var monitor = request.monitor;
    chrome.windows.create({
      top: parseInt(monitor.bounds.top),
      left: parseInt(monitor.bounds.left),
      width: parseInt(monitor.bounds.width),
      height: parseInt(monitor.bounds.height),
      focused: false
    },
      function (data) {
        sendResponse({
          response: data
        });
      })
    return true;
  }
  if (request.action === "getMonitorLeftWindow") {
    monitor = request.monitor
    //brings all chrome windows that are within a specific monitor
    chrome.windows.getAll(function (ws) {
      let consernedWindow;
      for (w of ws) {
        if (w.left >= monitor.bounds.left - request.threshold && w.left <= monitor.bounds.left + monitor.bounds.width - request.threshold) {
          //take the more on the left window on the monitor
          if (!consernedWindow || w.left < consernedWindow.left)
            consernedWindow = w;
        }
      }
      sendResponse({
        response: consernedWindow
      });
    })
    return true;
  }
  if (request.action === "getMonitorLatestWindow") {
    monitor = request.monitor
    //brings all chrome windows that are within a specific monitor
    chrome.windows.getAll(function (ws) {
      let consernedWindow;
      for (w of ws) {
        if (w.left + request.threshold < (monitor.bounds.left + monitor.bounds.width) && w.left + request.threshold >= monitor.bounds.left) {
          //take the last created window on the monitor
          if (!consernedWindow || w.id > consernedWindow.id)
            consernedWindow = w;
        }
      }
      sendResponse({
        response: consernedWindow
      });
    })
    return true;
  }
  if (request.action === "getMonitors") {

    chrome.storage.sync.get(
      ["linkDestination", "ttMonitors"],
      function (result) {
        let monitors;
        let slotsConfig;
        if (result.linkDestination == "window") {
          chrome.system.display.getInfo(function (displayInfo) {
            let display, winTop, winLeft, winWidth, winHeight;
            let displayConfig = result.ttMonitors.configs;
            monitors = displayInfo;
            let j = 0;
            let orderedMonitors = []
            for (o in displayConfig) {
              displayConfig[o].monitorOrder = parseInt(o);
            }
            let orderedConfig = sortByKey(displayConfig, "id")
            for (m of monitors) {
              m.order = orderedConfig[j].monitorOrder
              m.layout = orderedConfig[j].layout
              m.useThis = orderedConfig[j].useThis
              j++
            }

            orderedMonitors = sortByKey(monitors, "order")
            let consernedWindow = false;
            slotsConfig = displayConfig;

            let layout = displayConfig[0].layout;

            sendResponse({
              response: orderedMonitors
            });
          });
        }
      }
    )

    return true;
  }
});



function arrangeAndSizeWindows(tabNum, selectedMonitor, Monitors, callbackFunction = 0) {
  chrome.storage.sync.get(
    ["linkDestination", "ttMonitors"],
    function (result) {
      let monitors;
      if (result.linkDestination == "window") {
        chrome.system.display.getInfo(function (displayInfo) {
          let display, winTop, winLeft, winWidth, winHeight;
          let displayConfig = result.ttMonitors.configs;
          monitors = displayInfo;
          let j = 0;
          for (m of monitors) {
            m.order = displayConfig[j].id
            j++
          }
          let layout = displayConfig[0].layout;
          display = (function (tabNum, displayConfig, display) {
            let perDisplay = 0;
            let i = 0;
            for (g = 0; g < displayConfig.length; g++) {
              if (displayConfig[g].useThis != "no") {
                if (displayConfig[g].layout == "default") {
                  perDisplay += 1;
                } else if (displayConfig[g].layout == "tabsPlusSlots") {
                  perDisplay += 3;
                } else if (displayConfig[g].layout == "twoByThree" || displayConfig[g].layout == "threeByTwo") {
                  perDisplay += 6;
                } else if (displayConfig[g].layout == "threeByThree") {
                  perDisplay += 9;
                } else if (displayConfig[g].layout == "twoByTwo") {
                  perDisplay += 4;
                } else if (displayConfig[g].layout == "twoByOne" || displayConfig[g].layout == "oneByTwo") {
                  perDisplay += 2;
                } else {
                  perDisplay += 1;
                }
              }
              if (tabNum >= perDisplay || displayConfig[i].useThis == "no") {
                layout = displayConfig[i].layout;
                i++;
              }
            }
            if (displayConfig[i].useThis != "no" && display[displayConfig[i].id]) {
              return {
                top: selectedMonitor.bounds.top,
                left: selectedMonitor.bounds.left,
                width: selectedMonitor.bounds.width,
                height: selectedMonitor.bounds.height,
                centerY: function () {
                  return this.top + (this.height - this.height / 2);
                },
                centerX: function () {
                  return this.left + (this.width - this.width / 2);
                },
                // -new functions to calculate the positions of windows on the 3x3 layouts
                oneThirdY: function () {
                  return this.top + (this.height - this.height * 2 / 3);
                },
                oneThirdX: function () {
                  return this.left + (this.width - this.width * 2 / 3);
                },
                twoThirdY: function () {
                  return this.top + (this.height - (this.height * 2 / 3)) * 2;
                },
                twoThirdX: function () {
                  return this.left + (this.width - (this.width * 2 / 3)) * 2;
                }
              };
            }
            return false;
          })(tabNum, displayConfig, displayInfo);
          if (display) {
            var RealTabNum = tabNum;
            tabNum -= getTargetMonitor(tabNum, Monitors).dotsSoFar

            switch (selectedMonitor.layoutName) {
              case "default": {
                let consernedWindow = false;
                chrome.windows.getAll(function (ws) {
                  for (w of ws) {
                    if (w.left <= (display.left + display.width) && w.left >= display.left) {
                      if (!consernedWindow || w.id > consernedWindow.id)
                        //take the last window
                        consernedWindow = w;
                    }
                  }
                })
              }
                break;
              case "tabsPlusSlots":
                winWidth = display.width / 2;
                winHeight = display.height / 2;
                if (tabNum % 3 == 0) {
                  winTop = display.top;
                  winLeft = display.left;
                  winWidth = display.width / 2;
                  winHeight = display.height;
                } else if (tabNum % 3 == 1) {
                  winTop = display.top;
                  winLeft = display.centerX();
                } else if (tabNum % 3 == 2) {
                  winTop = display.centerY();
                  winLeft = display.centerX();
                }
                break;
              case "twoByTwo":

                if (tabNum % 4 == 0) {
                  winTop = display.top;
                  winLeft = display.left;
                } else if (tabNum % 4 == 1) {
                  winTop = display.top;
                  winLeft = display.centerX();
                } else if (tabNum % 4 == 2) {
                  winTop = display.centerY();
                  winLeft = display.left;
                } else if (tabNum % 4 == 3) {
                  winTop = display.centerY();
                  winLeft = display.centerX();
                }
                winWidth = display.width / 2;
                winHeight = display.height / 2;
                break;
              case "twoByOne":
                if (tabNum % 2 == 0) {
                  winTop = display.top;
                  winLeft = display.left;
                } else if (tabNum % 2 == 1) {
                  winTop = display.top;
                  winLeft = display.centerX();
                }
                winWidth = display.width / 2;
                winHeight = display.height;
                break;
              case "oneByTwo":
                if (tabNum % 2 == 0) {
                  winTop = display.top;
                  winLeft = display.left;
                } else if (tabNum % 2 == 1) {
                  winTop = display.centerY();
                  winLeft = display.left;
                }
                winWidth = display.width;
                winHeight = display.height / 2;
                break;
              case "threeByThree": //3x3
                if (tabNum % 9 == 0) { //1x1
                  winTop = display.top;
                  winLeft = display.left;
                } else if (tabNum % 9 == 1) { //2x1
                  winTop = display.top;
                  winLeft = display.oneThirdX();
                } else if (tabNum % 9 == 2) { //3x1
                  winTop = display.top;
                  winLeft = display.twoThirdX();
                } else if (tabNum % 9 == 3) { //1x2
                  winTop = display.oneThirdY();
                  winLeft = display.left;
                } else if (tabNum % 9 == 4) { //2x2
                  winTop = display.oneThirdY();
                  winLeft = display.oneThirdX();
                } else if (tabNum % 9 == 5) { //3x2 
                  winTop = display.oneThirdY();
                  winLeft = display.twoThirdX();
                } else if (tabNum % 9 == 6) { //1x3
                  winTop = display.twoThirdY();
                  winLeft = display.left;
                } else if (tabNum % 9 == 7) { //2x3
                  winTop = display.twoThirdY();
                  winLeft = display.oneThirdX();
                } else if (tabNum % 9 == 8) { //3x3
                  winTop = display.twoThirdY();
                  winLeft = display.twoThirdX();
                }
                winWidth = display.width / 3;
                winHeight = display.height / 3;
                break;
              case "twoByThree": //2x3
                if (tabNum % 9 == 0) { //1x1
                  winTop = display.top;
                  winLeft = display.left;
                } else if (tabNum % 9 == 1) { //2x1
                  winTop = display.top;
                  winLeft = display.centerX();
                } else if (tabNum % 9 == 2) { //x1
                  winTop = display.oneThirdY();
                  winLeft = display.left;
                } else if (tabNum % 9 == 3) { //1x2
                  winTop = display.oneThirdY();
                  winLeft = display.centerX();
                } else if (tabNum % 9 == 4) { //2x2
                  winTop = display.twoThirdY();
                  winLeft = display.left;
                } else if (tabNum % 9 == 5) { //3x2 
                  winTop = display.twoThirdY();
                  winLeft = display.centerX();
                }
                winWidth = display.width / 2;
                winHeight = display.height / 3;
                break;
              case "threeByTwo": //3x2
                if (tabNum % 9 == 0) { //1x1
                  winTop = display.top;
                  winLeft = display.left;
                } else if (tabNum % 9 == 1) { //2x1
                  winTop = display.top;
                  winLeft = display.oneThirdX();
                } else if (tabNum % 9 == 2) { //3x1
                  winTop = display.top;
                  winLeft = display.twoThirdX();
                } else if (tabNum % 9 == 3) { //1x2
                  winTop = display.centerY();
                  winLeft = display.left;
                } else if (tabNum % 9 == 4) { //2x2
                  winTop = display.centerY();
                  winLeft = display.oneThirdX();
                } else if (tabNum % 9 == 5) { //3x2 
                  winTop = display.centerY();
                  winLeft = display.twoThirdX();
                }
                winWidth = display.width / 3;
                winHeight = display.height / 2;
                break;
              default:
                winTop = display.top;
                winLeft = display.left;
                winWidth = display.width;
                winHeight = display.height;
            }
            tabNum = RealTabNum
            chrome.windows.create({
              tabId: slots[tabNum].id,
              top: parseInt(winTop),
              left: parseInt(winLeft),
              width: parseInt(winWidth),
              height: parseInt(winHeight),
              focused: false
            },
              function (data) {
                //return the opened window for external use
                if (callbackFunction != 0)
                  callbackFunction(data)
              }
            );
          }
        });
      }
    }
  )
}



//identifying displays..

function configMonitors() {
  chrome.system.display.getInfo(function (displayInfo) {
    for (let i = 0; i < displayInfo.length; i++) {
      chrome.windows.create({
        url: chrome.extension.getURL(
          `../html/displaySettings.html?displayIndex=${i}&isPrimary=${
          displayInfo[i].isPrimary
          }&top=${displayInfo[i].bounds.top}&left=${
          displayInfo[i].bounds.left
          }&displayWidth=${displayInfo[i].bounds.width}`
        ),
        top: parseInt(displayInfo[i].workArea.top),
        left: parseInt(displayInfo[i].workArea.left),
        width: parseInt(450),
        height: parseInt(510)
      },
        function (data) {
          popUpsArray.push(data.id);
        }
      );
    }
  });
}

function closePopUps() {
  for (let i = 0; i < popUpsArray.length; i++) {
    chrome.windows.remove(popUpsArray[i]);
  }
  popUpsArray = [];
}

//close all monitor number popups on closing one..

chrome.windows.onRemoved.addListener(function (windowId) {
  if (popUpsArray.includes(windowId)) {
    closePopUps()
  }
})

//setting default storage values..
chrome.storage.sync.get(
  [
    "ttSwitchState",
    "numTabs",
    "interfaceType",
    "showGear",
    "dotRef",
    "xOffset",
    "yOffset",
    "linkDestination",
    "ttMonitors"
  ],
  function (result) {
    if (result.ttSwitchState == undefined) {
      chrome.storage.sync.set({
        ttSwitchState: "on"
      });
    }

    if (result.numTabs == undefined) {
      chrome.storage.sync.set({
        numTabs: 3
      });
    }

    if (result.interfaceType == undefined) {
      chrome.storage.sync.set({
        interfaceType: "hoveringDot"
      });
    }

    if (result.showGear == undefined) {
      chrome.storage.sync.set({
        showGear: "on"
      });
    }

    if (result.dotRef == undefined) {
      chrome.storage.sync.set({
        dotRef: "pointer"
      });
    }

    if (result.xOffset == undefined) {
      chrome.storage.sync.set({
        xOffset: 12
      });
    }

    if (result.yOffset == undefined) {
      chrome.storage.sync.set({
        yOffset: 0
      });
    }

    if (result.linkDestination == undefined) {
      chrome.storage.sync.set({
        linkDestination: "window"
      });
    }

    if (result.ttClicks == undefined) {
      chrome.storage.sync.set({
        ttClicks: 0
      });
    }
    if (result.ttMonitors == undefined) {
      chrome.system.display.getInfo(function (displayInfo) {
        let MonitorConfig = [];
        displayInfo[i];
        console.log("sf");
        for (let i = 0; i < displayInfo.length; i++) {
          if (displayInfo[i].isPrimary) {
            MonitorConfig.unshift({
              id: i,
              layout: "oneByOne",
              useThis: "yes",
              layout_id: 2,
              slots: 1,
            });
          } else {
            MonitorConfig.push({
              id: i,
              layout: "twoByTwo",
              useThis: "no",
              layout_id: 5,
              slots: 4,
            });
          }
        }
        let ttMonitors = {};
        ttMonitors["configs"] = MonitorConfig;
        chrome.storage.sync.set({
          ttMonitors: ttMonitors
        });
      });
    }
  }
);

function abandonTabs() {
  for (let i = 0; i < slots.length; i++) {
    chrome.tabs.remove(slots[i].id, function () {
      slots[i] = undefined;
      slotUrls[i] = undefined;
    })
  }
  // slots = [];
  // slotUrls = [];
}