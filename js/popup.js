//layouts select box loads from this object
var Layouts = [{
  name: "default",
  text: "1x1-tabs",
  slots: 1,
  class: [{
    name: 'tab-11',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-11-r',
      type: 'child1',
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },]
},
{
  name: "tabsPlusSlots",
  text: "1-tab-2-slots",
  slots: 3,
  class: [{
    name: 'tab-53',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'parent-52',
    type: 'parent',
    children: [{
      name: 'slot-51-r',
      type: 'child',
    },
    {
      name: 'slot-51-br',
      type: 'child',
    }
    ]
  },
  ]
},
{
  name: "oneByOne",
  text: "1-slot",
  slots: 1,
  class: [{
    name: 'slot-11',
    type: 'child',
  },]
},
{
  name: "oneByTwo",
  text: "1x2-slots",
  slots: 2,
  class: [{
    name: 'slot-12',
    type: 'child',
  },
  {
    name: 'slot-12-b',
    type: 'child',
  },
  ]
},
{
  name: "twoByOne",
  text: "2x1-slots",
  slots: 2,
  class: [{
    name: 'slot-21',
    type: 'child',
  },
  {
    name: 'slot-21-r',
    type: 'child',
  },
  ]
},
{
  name: "twoByTwo",
  text: "2x2-slots",
  slots: 4,
  class: [{
    name: 'slot-22',
    type: 'child',
  },
  {
    name: 'slot-22-r',
    type: 'child',
  },
  {
    name: 'slot-22-b',
    type: 'child',
  },
  {
    name: 'slot-22-br',
    type: 'child',
  },
  ]
},
{
  name: "twoByThree",
  text: "2x3-slots",
  slots: 6,
  class: [{
    name: 'slot-23',
    type: 'child',
  },
  {
    name: 'slot-23-r',
    type: 'child',
  },
  {
    name: 'slot-23-m',
    type: 'child',
  },
  {
    name: 'slot-23-mr',
    type: 'child',
  },
  {
    name: 'slot-23',
    type: 'child',
  },
  {
    name: 'slot-23-r',
    type: 'child',
  },
  ]
},
{
  name: "threeByTwo",
  text: "3x2-slots",
  slots: 6,
  class: [{
    name: 'slot-32',
    type: 'child',
  },
  {
    name: 'slot-32-m',
    type: 'child',
  },
  {
    name: 'slot-32',
    type: 'child',
  },
  {
    name: 'slot-32-b',
    type: 'child',
  },
  {
    name: 'slot-32-mb',
    type: 'child',
  },
  {
    name: 'slot-32-b',
    type: 'child',
  },
  ]
},
{
  name: "threeByThree",
  text: "3x3-slots",
  slots: 9,
  class: [{
    name: 'slot-33',
    type: 'child',
  },
  {
    name: 'slot-33-mx',
    type: 'child',
  },
  {
    name: 'slot-33',
    type: 'child',
  },
  {
    name: 'slot-33-my',
    type: 'child',
  },
  {
    name: 'slot-33-mm',
    type: 'child',
  },
  {
    name: 'slot-33-my',
    type: 'child',
  },
  {
    name: 'slot-33',
    type: 'child',
  },
  {
    name: 'slot-33-mx',
    type: 'child',
  },
  {
    name: 'slot-33',
    type: 'child',
  },
  ]
},
{
  name: "oneTabAndOneSlot",
  text: "1 tab, 1 slot",
  slots: 2,
  class: [{
    name: 'tab-53',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'parent-52',
    type: 'parent',
    children: [{
      name: 'slot-52',
      type: 'child',
    }
    ]
  }]
},
{
  name: "twoTabsAndOneSlot",
  text: "2 tabs, 1 slots",
  slots: 3,
  class: [{
    name: 'tab-22',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-r',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'slot-12-b',
    type: 'child',
  },
  ]
},
{
  name: "twoTabsByTwoSlots",
  text: "2 tabs, 2 slots",
  slots: 4,
  class: [{
    name: 'tab-22',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'slot-22-r',
    type: 'child',
  },
  {
    name: 'tab-22-b',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'slot-22-br',
    type: 'child',
  },
  ]
},
{
  name: "twoByOneTabs",
  text: "2x1-tabs",
  slots: 2,
  class: [{
    name: 'tab-21',
    type: 'parent1',
    children: [{
      name: 'tab-21-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-21-r',
    type: 'parent1',
    children: [{
      name: 'tab-21-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  }]
},
{
  name: "oneByTwoTabs",
  text: "1x2-tabs",
  slots: 2,
  class: [{
    name: 'tab-12',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-11-r',
      type: 'child1',
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-12-b',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-11-r',
      type: 'child1',
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  }]
},
{
  name: "oneTabAndTwoTabs",
  text: "1-tab/2-tabs",
  slots: 3,
  class: [{
    name: 'tab-12',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-11-r',
      type: 'child1',
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-b',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-br',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  ]
},
{
  name: "twoTabsAndOneTab",
  text: "2-tabs/1-tab",
  slots: 3,
  class: [{
    name: 'tab-22',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-r',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-12-b',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-11-r',
      type: 'child1',
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  ]
},
{
  name: "twoByTwoTabs",
  text: "2x2-tabs",
  slots: 4,
  class: [{
    name: 'tab-22',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-r',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-b',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-br',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  ]
},
{
  name: "threeFifthTabAndSecondFifthsSlot",
  text: "⅗  tabs | ⅖ slot",
  slots: 2,
  class: [{
    name: 'tab-53',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'slot-52',
    type: 'child',
  }
  ]
},
{
  name: "oneSecondsTabAndOneSecondsSlot",
  text: "½ tab | ½ slot",
  slots: 2,
  class: [{
    name: 'tab-21',
    type: 'parent1',
    children: [{
      name: 'tab-21-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'slot-21-r',
    type: 'child',
  }
  ]
},
{
  name: "oneSecondsTabAndtwoSlots",
  text: "½ tab | 1x2 slots",
  slots: 3,
  class: [{
    name: 'tab-21',
    type: 'parent1',
    children: [{
      name: 'tab-21-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'parent-half',
    type: 'parent',
    children: [{
      name: 'slot-22-r',
      type: 'child',
    },
    {
      name: 'slot-22-br',
      type: 'child',
    }
    ]
  }]
},
{
  name: "oneSecondsTabAndtwoSlot",
  text: "⅗ tab | 1x2 slots",
  slots: 2,
  class: [{
    name: 'tab-53',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'parent-52',
    type: 'parent',
    children: [{
      name: 'slot-51-r',
      type: 'child',
    },
    {
      name: 'slot-51-br',
      type: 'child',
    }
    ]
  }]
},

{
  name: "twoTabsOrOneSlot",
  text: "2 tabs | 1 slot",
  slots: 3,
  class: [{
    name: 'parent-half',
    type: 'parent',
    children: [{
      name: 'tab-22',
      type: 'parent1',
      children: [{
        name: 'tab-22-child',
        type: 'parent1',
        children: [{
          name: 'child2',
          type: 'child1'
        }]
      },
      {
        name: 'tab-num',
        type: 'child'
      }]
    },
    {
      name: 'tab-22-b',
      type: 'parent1',
      children: [{
        name: 'tab-22-child',
        type: 'parent1',
        children: [{
          name: 'child2',
          type: 'child1'
        }]
      },
      {
        name: 'tab-num',
        type: 'child'
      }]
    },
    ]
  },
  {
    name: 'slot-21-r',
    type: 'child',
  }
  ]
},

{
  name: "oneByOneTabAndOneByTwoSlot",
  text: "1 tab / 2 slots",
  slots: 3,
  class: [{
    name: 'tab-12',
    type: 'parent1',
    children: [{
      name: 'tab-53-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      },
      {
        name: 'child1',
        type: 'child1'
      }]
    },
    {
      name: 'tab-11-r',
      type: 'child1',
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'slot-22-b',
    type: 'child',
  },
  {
    name: 'slot-22-br',
    type: 'child',
  },
  ]
},

{
  name: "twoTabsTwoSlots",
  text: "2 tabs/2 slots",
  slots: 4,
  class: [{
    name: 'tab-22',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'tab-22-r',
    type: 'parent1',
    children: [{
      name: 'tab-22-child',
      type: 'parent1',
      children: [{
        name: 'child2',
        type: 'child1'
      }]
    },
    {
      name: 'tab-num',
      type: 'child'
    }]
  },
  {
    name: 'slot-22-b',
    type: 'child',
  },
  {
    name: 'slot-22-br',
    type: 'child',
  },
  ]
},
];

const numTabs = document.querySelector("#numTabs");
numTabs.addEventListener("input", event => {
  if (event.target.checkValidity()) {
    chrome.storage.sync.set({
      numTabs: event.target.value
    });
  } else {
    event.preventDefault();
    event.target.reportValidity();
    return;
  }
});

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
chrome.storage.sync.get(
  [
    "ttSwitchState",
    "numTabs",
    "ttClicks",
    "linkDestination",
    "ttMonitors"
  ],
  function (result) {
    // let Layouts = result.ttLayouts;
    if (result.numTabs != undefined) {
      numTabs.value = result.numTabs;
    }
    if (result.ttSwitchState == "on") {
      targetTabsSwitch.checked = true;
    } else if (result.ttSwitchState == "off") {
      targetTabsSwitch.checked = false;
    }
    clicksCount.innerHTML = result.ttClicks;
    displays = result.ttMonitors["configs"];

    html = '';
    // console.log(displays);
    // console.log(result.ttMonitors);


    let counter = 1;
    let max_counter = 0;
    for (let i = 0; i < displays.length; i++) {
      if (displays[i].useThis !== "yes") continue;
      max_counter += parseInt(displays[i].slots);
      html += `<div class="popup-display">`
      html += `<div class="popup-display-monitors display-inline">` + (i + 1) + `</div><div class="layout-grid">`;
      Layouts[displays[i].layout_id].class.forEach((layout_cls) => {
        if (typeof layout_cls !== 'undefined') {
          const res = insertPopNewDivSection(layout_cls, counter);
          html += res.html;
          counter += res.count;
        }
      });
      html += `</div><div class="parent close">x</div>`;
      html += `<div style="clear:both"></div></div>`;
      counter = parseInt(displays[i].slots) + 1;
    }


    let popupMonitors = document.getElementById("popup-monitors");
    popupMonitors.innerHTML = html;

    if (result.linkDestination == "window") {
      let displayConfigs = result.ttMonitors["configs"];
      let count = 0;
      for (let i = 0; i < displayConfigs.length; i++) {
        if (displayConfigs[i].useThis != "no") {
          if (displayConfigs[i].layout == "tabsPlusSlots" || displayConfigs[i].layout == "twoTabsAndOneSlot"
            || displayConfigs[i].layout == "oneTabAndTwoTabs" || displayConfigs[i].layout == "twoTabsAndOneTab"
            || displayConfigs[i].layout == "oneSecondsTabAndtwoSlots" || displayConfigs[i].layout == "twoTabsOrOneSlot"
            || displayConfigs[i].layout == "oneByOneTabAndOneByTwoSlot") {
            count += 3;
          } else if (displayConfigs[i].layout == "twoByThree" || displayConfigs[i].layout == "threeByTwo") {
            count += 6;
          } else if (displayConfigs[i].layout == "threeByThree") {
            count += 9;
          } else if (displayConfigs[i].layout == "twoByTwo" || displayConfigs[i].layout == "twoTabsByTwoSlots"
            || displayConfigs[i].layout == "twoByTwoTabs" || displayConfigs[i].layout == "twoTabsTwoSlots") {
            count += 4;
          } else if (displayConfigs[i].layout == "twoByOne" || displayConfigs[i].layout == "oneByTwo"
            || displayConfigs[i].layout == "twoByOneTabs" || displayConfigs[i].layout == "oneByTwoTabs"
            || displayConfigs[i].layout == "oneTabAndOneSlot" || displayConfigs[i].layout == "threeFifthTabAndSecondFifthsSlot"
            || displayConfigs[i].layout == "oneSecondsTabAndOneSecondsSlot" || displayConfigs[i].layout == "oneSecondsTabAndtwoSlot") {
            count += 2;
          } else {
            count += 1;
          }
        }
      }
      numTabs.setAttribute("max", count);
      //update the number of target tabs on the panel
      numTabs.value = count;
      document.getElementById("numTabsHolder").innerHTML = count;
      chrome.storage.sync.set({
        numTabs: count
      });
    }
  }
);