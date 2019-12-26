const numTabs = document.querySelector("#numTabs");
const monitorMax = 9;
let gDisplaysStatus = [];


const targetTabsSwitch = document.querySelector("#targetTabsSwitch");
targetTabsSwitch.addEventListener("change", event => {
  if (event.target.checked) {
    chrome.storage.sync.set({
      ttSwitchState: "on"
    });
  } else {
    chrome.storage.sync.set({
      ttSwitchState: "off"
    });
  }
});

//clicks counter
const clicksCount = document.querySelector("#clicksCount");

const interfaceType = document.querySelectorAll('input[name="interfaceType"]');
for (var i = 0; i < interfaceType.length; i++) {
  interfaceType[i].addEventListener("click", event => {
    chrome.storage.sync.set({
      interfaceType: event.target.value
    });
  });
}

const gearSwitch = document.querySelector("#showGear");
gearSwitch.addEventListener("change", event => {
  if (event.target.checked) {
    chrome.storage.sync.set({
      showGear: "on"
    });
  } else {
    chrome.storage.sync.set({
      showGear: "off"
    });
  }
});

const dotRef = document.querySelectorAll('input[name="dotRef"]');
for (var i = 0; i < dotRef.length; i++) {
  dotRef[i].addEventListener("click", event => {
    chrome.storage.sync.set({
      dotRef: event.target.value
    });
  });
}

const xOffset = document.querySelector("#xOffset");
xOffset.addEventListener("input", event => {
  if (event.target.checkValidity()) {
    chrome.storage.sync.set({
      xOffset: event.target.value
    });
  } else {
    event.preventDefault();
    event.target.reportValidity();
    return;
  }
});

const yOffset = document.querySelector("#yOffset");
yOffset.addEventListener("input", event => {
  if (event.target.checkValidity()) {
    chrome.storage.sync.set({
      yOffset: event.target.value
    });
  } else {
    event.preventDefault();
    event.target.reportValidity();
    return;
  }
});

const linkDestination = document.querySelectorAll(
  'input[name="linkDestination"]'
);
for (var i = 0; i < linkDestination.length; i++) {
  linkDestination[i].addEventListener("click", event => {
    chrome.storage.sync.set({
      linkDestination: event.target.value
    });
  });
}

//open monitor config popups...
const openPopUps = document.getElementById("openPopUps");
openPopUps.addEventListener(
  "click",
  function (e) {
    chrome.runtime.sendMessage({
      action: "openPopUps"
    });
  },
  false
);

//close monitor config popups
const closePopups = document.getElementById("closePopups");
closePopups.addEventListener(
  "click",
  function (e) {
    chrome.runtime.sendMessage({
      action: "closeAllPopups"
    });
  },
  false
);


const reloadData = () => {
  document.getElementById('monitorsTBody').innerHTML = "";
  chrome.system.display.getInfo(function (displayInfo) {
    chrome.storage.sync.get(["ttMonitors"], function (result) {
      onTTMonitorsFunc(result, displayInfo);
    });
  });
}
reloadData();

const calculateDisplays = (displayInfo, result) => {
  if (result.ttMonitors === undefined) {
    let MonitorConfig = [];
    displayInfo.forEach((infor, idx) => {
      if (infor.isPrimary) {
        MonitorConfig.unshift({
          id: idx,
          layout: "oneByOne",
          useThis: "yes",
          layout_id: 2,
          slots: 1,
        });
      } else {
        MonitorConfig.push({
          id: idx,
          layout: "twoByTwo",
          useThis: "no",
          layout_id: 5,
          slots: 4,
        });
      }
    });
    chrome.storage.sync.set({
      ttMonitors: {
        "configs": MonitorConfig
      }
    });
    return MonitorConfig;
  }
  return result.ttMonitors["configs"];
}

function renderMonitorConfig(displayInfo, displays) {
  let html = ``;
  //returns "selected" if the layout in parameter is the one previously saved
  function ifLayoutSelected(layout, h) {
    return displays[h].layout == layout.name ? "selected" : ""
  }
  let counter = 1;
  let max_counter = 0;
  displayInfo.forEach((infor, index) => {
    let selectOrNotFlag = "";
    let startLayoutIdx = 0;
    let h = 0;
    let notDeactivate = false;
    let buttonsDisabledClass = false;


    displays.forEach((display, dIdx) => {
      if (display === undefined) {
        display = {
          id: index,
          layout: "twoByTwo",
          useThis: "no",
          layout_id: 5,
          slots: 4,
        };
      }
      if (display.id === index) {
        h = dIdx;
        if (display.useThis === "no") {
          selectOrNotFlag = "selected"
        } else if (display.id < index) {
          startLayoutIdx += displays.slots;
        }
      }
    })


    html += `<tr>
  <td class="displaysIDs"><div class="displayID-div">${index + 1}</div></td>
  <td>
  <select data-displayIndex="${h}" data-diplayNum="${index}" class="displayOrder"><option value="-1" ${selectOrNotFlag}>Deactivate</option>`;
    for (let k = 0; k < monitorMax; k++) {
      var monitorNumber = k + 1;
      var monitorString = monitorNumber;
      // -set a suffix for each number (1st, 2nd...)
      switch (monitorNumber) {
        case (1):
          monitorString += "st";
          break;
        case (2):
          monitorString += "nd";
          break;
        case (3):
          monitorString += "rd";
          break;
        default:
          monitorString += "th";
          break;
      }

      // -disable targets that corresponds to unavailable monitors (on the select box)
      disabledString = monitorNumber > displayInfo.length ? "disabled" : "";

      //disable buttons if "Deactivate" has been selected
      if (k == h && selectOrNotFlag == "")
        notDeactivate = true

      html += `<option value='${k}' ${k == h && selectOrNotFlag == "" ? "selected" : ""} ${disabledString}>${monitorString} target </option>`;
    }
    if (!notDeactivate) {
      buttonsDisabledClass = "disabled";
    }
    max_counter += parseInt(displays[h].slots);
    html += `</select></td><td class='layoutsCol ${buttonsDisabledClass}'>`;
    // <img src='/img/${displays[h].layout}.png'>`;

    html += `<div class="layout-wrapper">`;
    html += populateGridLayout(displays, h, Layouts, counter, max_counter);
    html += `</div>`;

    //layouts part
    html += `<select class='layoutsSelect '>`;
    for (l in Layouts)
      html += `<option value='${Layouts[l].name}' id='${Layouts[l].name + h}' ${ifLayoutSelected(Layouts[l], h)} name='windowsLayout${h}' slots='${Layouts[l].slots}' layout_id='${l}'>${Layouts[l].text}</option>`
    html += `</select>`;

    html += `</td> </tr>
`;

  });
  let configTableBody = document.getElementById("monitorsTBody");
  // configTableBody.innerHTML = "";
  configTableBody.insertAdjacentHTML("beforeend", html);
  // renderMonitorConfig(displayInfo, displays);
  // populateGridNumbers();
}
const calcDisplayOrder = (displayInfo, displays) => {
  const monitors = document.querySelectorAll(".displayOrder");
  monitors.forEach(monitor => {
    monitor.addEventListener("change", event => {
      let index = event.target.value;
      if (index == -1)
        event.target.parentNode.parentNode.querySelector(".layoutsCol").classList.add("disabled")
      let value = event.target.getAttribute("data-diplayNum");
      let index2 = event.target.getAttribute("data-displayIndex");

      value = parseInt(value);
      index = parseInt(index);
      index2 = parseInt(index2);
      if (index != -1) {
        value2 = displays[index].id;
        displays[index].id = value;
        displays[index2].id = value2;
        displays[index].useThis = "yes";
        if (index != index2) {
          displays[index2].useThis = "no";
        }
      } else {
        displays[index2].useThis = "no";
      }
      chrome.storage.sync.set({
        ttMonitors: {
          "configs": displays
        }
      }, function () {
        chrome.runtime.sendMessage({
          action: "abandonTabs"
        });
        location.reload()
      });
    });
  });
}
const appendLayoutchangeListener = (displayInfo, displays) => {
  //triggers when a layout has been selected
  chrome.system.display.getInfo((monitors) => {
    const aux = monitors.map((disp, idx) => {
      return displays[idx];
    });
    displays = aux;
  });
  const rLayoutsOptions = [...document.querySelectorAll(".layoutsSelect")].reverse();
  rLayoutsOptions.forEach(option => {
    option.addEventListener("change", () => {
      //get the attributes of the selected option on the layouts select box

      optionAttributes = option.querySelectorAll('option:checked')[0].attributes;
      if (optionAttributes.name.value.startsWith("windowsLayout")) {
        displays[parseInt(optionAttributes.name.value.substr(-1))].layout = optionAttributes.value.value;
        displays[parseInt(optionAttributes.name.value.substr(-1))].slots = optionAttributes.slots.value;
        displays[parseInt(optionAttributes.name.value.substr(-1))].layout_id = optionAttributes.layout_id.value;
      }

      chrome.storage.sync.set({
        ttMonitors: {
          "configs": displays
        }
      }, function () {
        calcMaxTabsAllowed();
        reloadData();
        // renderMonitorConfig(displayInfo, displays);
        chrome.runtime.sendMessage({
          action: "abandonTabs"
        });
      });
    },
      0
    );
  });
}
const onTTMonitorsFunc = (result, displayInfo) => {
  gDisplaysStatus = calculateDisplays(displayInfo, result);
  renderMonitorConfig(displayInfo, gDisplaysStatus);
  calcDisplayOrder(displayInfo, gDisplaysStatus);
  appendLayoutchangeListener(displayInfo, gDisplaysStatus);
}
//calculating max allowed tabs while opening links in windows


function calcMaxTabsAllowed() {
  chrome.storage.sync.get(
    [
      "linkDestination",
      "ttMonitors"
    ],
    function (result) {
      if (result.linkDestination == "window") {
        const displayConfigs = result.ttMonitors["configs"];
        const count = displayConfigs.reduce((prev, displayConfig) => {
          let curCount = 0;
          if (displayConfig.useThis == "no") return prev;
          switch (displayConfig.layout) {
            case "tabsPlusSlots":
            case "twoTabsAndOneSlot":
            case "oneTabAndTwoTabs":
            case "twoTabsAndOneTab":
            case "oneSecondsTabAndtwoSlots":
            case "twoTabsOrOneSlot":
            case "oneByOneTabAndOneByTwoSlot":
              curCount = 3;
              break;
            case "twoByThree":
            case "threeByTwo":
              curCount = 6;
              break;
            case "threeByThree":
              curCount = 9;
              break;
            case "twoByTwo":
            case "twoTabsByTwoSlots":
            case "twoByTwoTabs":
            case "twoTabsTwoSlots":
              curCount = 4;
              break;

            case "twoByOne":
            case "oneByTwo":
            case "twoByOneTabs":
            case "oneByTwoTabs":
            case "oneTabAndOneSlot":
            case "threeFifthTabAndSecondFifthsSlot":
            case "oneSecondsTabAndOneSecondsSlot":
            case "oneSecondsTabAndtwoSlot":
              curCount = 2;
              break;
            default:
              curCount = 1;
          }
          return prev + curCount;
        },
          0);
        numTabs.setAttribute("max", count);
        //update the number of target tabs on the panel
        numTabs.value = count;
        document.getElementById("numTabsHolder").innerHTML = count;
        chrome.storage.sync.set({
          numTabs: count
        });
      }
    });
}
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
    "ttClicks",
    "ttMonitors",
    'ttSettings'
  ],
  function (result) {
    if (result.numTabs != undefined) {
      numTabs.value = result.numTabs;
    }

    if (result.xOffset != undefined) {
      xOffset.value = result.xOffset;
    }
    if (result.yOffset != undefined) {
      yOffset.value = result.yOffset;
    }

    if (result.ttSwitchState == "on") {
      targetTabsSwitch.checked = true;
    } else if (result.ttSwitchState == "off") {
      targetTabsSwitch.checked = false;
    }

    if (result.showGear == "on") {
      gearSwitch.checked = true;
    } else if (result.showGear == "off") {
      gearSwitch.checked = false;
    }

    document.optionsForm.interfaceType.value = result.interfaceType;
    document.optionsForm.dotRef.value = result.dotRef;
    document.optionsForm.linkDestination.value = result.linkDestination;
    clicksCount.innerHTML = result.ttClicks;
  }
);

function populateGridLayout(displays, dispIdx, Layouts, counter, max_counter) {
  const display = displays[dispIdx];
  const slots = display.slots;
  let html = `<div class="layout-grid">`;

  let start_pos = displays.reduce((prv, curVal, curIdx) => {
    if (curIdx < dispIdx && curVal.useThis === "yes") {
      return prv + Number(curVal.slots);
    }
    return prv;
  }, 1);
  if (Layouts[display.layout_id] && Layouts[display.layout_id].class) {
    Layouts[display.layout_id].class.forEach(layoutCls => {
      const res = insertNewDivSection(layoutCls, +start_pos);
      html += res.html;
      start_pos += res.count
    });
  }
  html += `</div>`;

  return html;
}

function populateGridNumbers() {

  // let html = document.getElementsByClassName('grid-number');
  // for (let i = 0; i < html.length; i++) {
  //   if (html[i].classList !== 'undefined') {
  //     if (!html[i].classList.contains('undefined')) {
  //       html[i].innerHTML = i + 1;
  //     }
  //   }
  // }
}