(function () {

  let ttenabled = true;
  let ttInterface = undefined;
  let ttUrl = "";
  linkInFocus = false;
  anchorInFocus = undefined;
  excludedHrefs = [undefined, "#", "", "javascript:void(0)", `${chrome.extension.getURL('../html/options.html')}`];

  checkSettings();
  createtInterface();

  let body = document.querySelector("body");
  body.addEventListener(
    "mouseover",
    (e) => {

      var anchor = e.target.closest("a");
      if (anchor !== null && ttenabled && !excludedHrefs.includes(anchor.getAttribute("href"))) {
        // if(e.shiftKey){
        if (true) {
          ttInterface.style.display = "inline";
          if (anchor.href != ttUrl || !linkInFocus) {
            chrome.storage.sync.get(["dotRef", "xOffset", "yOffset"], function (result) {
              if (result.dotRef == "pointer") {
                ttInterface.style.left = `${e.pageX + parseInt(result.xOffset)}px`;
                ttInterface.style.top = `${e.pageY + parseInt(result.yOffset)}px`;
              } else {
                ttInterface.style.left = `${anchor.getBoundingClientRect().right + window.scrollX}px`;
                ttInterface.style.top = `${anchor.getBoundingClientRect().top + window.scrollY}px`;
              }
            });
            linkInFocus = true;
          }
          ttUrl = anchor.href;
          anchorInFocus = anchor;
        }
      } else {
        if (
          anchorInFocus &&
          e.target != ttInterface &&
          !contains(ttInterface, e.target) &&
          calculateDistance(ttInterface, e.pageX, e.pageY) > 150
        ) {
          linkInFocus = false;
          ttInterface.style.display = "none";
        }

        function contains(parent, child) {
          return parent !== child && parent.contains(child);
        }

        function calculateDistance(elem, mouseX, mouseY) {
          if (elem) {
            return Math.floor(
              Math.sqrt(
                Math.pow(
                  mouseX -
                  (elem.getBoundingClientRect().left +
                    window.scrollX +
                    elem.offsetWidth / 2),
                  2
                ) +
                Math.pow(
                  mouseY -
                  (elem.getBoundingClientRect().top +
                    window.scrollY +
                    elem.offsetHeight / 2),
                  2
                )
              )
            );
          }
        }
      }
    },
    false
  );
  var axe = 0;
  var alreadyClicked = false;

  function openInTarget(tabNum, monitor, url, callbackFunction = 0) {

    chrome.runtime.sendMessage({
      action: "updateTab",
      tabNum: tabNum,
      monitor: monitor,
      url: url,
      Monitors: Monitors
    }, function (openedWindow) {
      if (callbackFunction != 0)
        callbackFunction(openedWindow)
    });
  }

  function createtInterface() {
    if (ttInterface != undefined && ttInterface.parentNode != null) {
      ttInterface.parentNode.removeChild(ttInterface);
    }
    ttInterface = document.createElement("div");
    ttInterface.classList.add("tt-interface");
    chrome.storage.sync.get(["numTabs", "showGear"], (result) => {
      let ttHtml = `<div class="d-flex tt-container">
      <div class="tt-dot"></div>
      <div class="tt-tooltip d-flex">
      `;
      for (let i = 1; i <= result.numTabs; i++) {
        ttHtml += `      <button class="tt-btn" title="Open Link in Target Tab ${i}" data-tabNo="${i}" style="height:22px !important;width:22px !important;">${i}</button>
        `;
      }
      if (result.showGear == "on") {
        ttHtml += `       <a href="${chrome.extension.getURL('../html/options.html')}" target="_blank">
        <img width="22px" height="22px" src="${chrome.extension.getURL('../img/gear.svg')}">
        </a>`;
      }
      ttHtml += `     </div>
      </div>`;
      ttInterface.innerHTML = ttHtml;
      if (true) {
        alreadyClicked = true;
        body.append(ttInterface);
        document.querySelector(".tt-container").addEventListener(
          "click",
          function (e) {
            if (e.target.className === "tt-btn") {
              let tabNum = e.target.getAttribute("data-tabNo");
              //get the monitor that's targeted by the slot
              targetMonitor = getTargetMonitor(tabNum);
              chrome.runtime.sendMessage({
                action: "getCurrentMonitor",
                monitor: Monitors,
                threshold: threshold
              }, function (data) {
              })
              if (targetMonitor.layoutName == "default") { //if the slot has tab option
                chrome.runtime.sendMessage({
                  action: "getMonitorLatestWindow",
                  monitor: targetMonitor,
                  threshold: threshold
                }, function (result) {
                  var action;
                  if (typeof result.response == "undefined")
                    chrome.runtime.sendMessage({
                      action: "openWindowInMonitor",
                      monitor: targetMonitor,
                      url: ttUrl
                    }, function (result) { })
                  else
                    chrome.runtime.sendMessage({
                      action: "openTabInWindow",
                      window: result.response,
                      url: ttUrl
                    }, function (result) { })
                })
              }
              //if user clicks on a dot that targets the tabs slot of the "tabs + slots" layout
              else if (targetMonitor.layoutName == "tabsPlusSlots" && targetMonitor.startingDotNumber == parseInt(tabNum)) {

                chrome.runtime.sendMessage({
                  action: "getMonitorLeftWindow",
                  monitor: targetMonitor,
                  threshold: threshold
                }, function (result) {
                  //if there's no left window just get the last active window
                  if (typeof result.response == "undefined") {
                    chrome.runtime.sendMessage({
                      action: "getMonitorLatestWindow",
                      monitor: targetMonitor,
                      threshold: threshold
                    }, function (result) {

                      if (typeof result.response == "undefined") {

                        //if there's no window on the left of the monitor then just follow the usual process
                        openInTarget(tabNum, getTargetMonitor(tabNum), ttUrl, function (openedWindow) {
                          //if it's the first dot of the tabs+slots layout
                          if (tabNum == targetMonitor.startingDotNumber)
                            targetMonitor.firstWindow = openedWindow;
                        })
                      } else {
                        var targetWindow = result.response;
                        chrome.runtime.sendMessage({
                          action: "openTabInWindow",
                          window: targetWindow,
                          url: ttUrl
                        }, function (result) {
                          chrome.runtime.sendMessage({
                            action: "repositionWindow",
                            window: targetWindow,
                            top: 0,
                            left: targetMonitor.bounds.left,
                            width: targetMonitor.bounds.width / 2,
                          }, function (result) { })
                        })
                      }
                    })


                  } else {
                    var targetWindow = result.response;
                    chrome.runtime.sendMessage({
                      action: "openTabInWindow",
                      window: result.response,
                      url: ttUrl
                    }, function (result) {
                      chrome.runtime.sendMessage({
                        action: "repositionWindow",
                        window: targetWindow,
                        top: 0,
                        left: targetMonitor.bounds.left,
                        width: targetMonitor.bounds.width / 2,
                      }, function (result) { })
                    })
                  }
                })
              } else {
                openInTarget(tabNum, getTargetMonitor(tabNum), ttUrl)
              }
            }
          },
          false
        );

      }
    });
  }

  function checkSettings() {
    chrome.storage.sync.get(["ttSwitchState", "interfaceType", "linkDestination", "windowsLayout"], function (result) {
      if (result.ttSwitchState == "on" && result.interfaceType == "hoveringDot") {
        ttenabled = true;
        createtInterface();
      } else {
        ttenabled = false;
        ttInterface.parentNode.removeChild(ttInterface);
        ttInterface = undefined;
      }
    });
  }

  chrome.storage.onChanged.addListener(function (changes, namespace) {
    createtInterface();
    checkSettings();
  });

  document.addEventListener(
    "keypress",
    function (e) {
      if (
        linkInFocus && ((e.keyCode >= 49 && e.keyCode <= 57) ||
          (e.keyCode >= 97 && e.keyCode <= 105))
      ) {
        chrome.runtime.sendMessage({
          action: "updateTab",
          tabNum: parseInt(String.fromCharCode(e.keyCode)),
          url: ttUrl
        });
      }
    },
    false
  );
})();