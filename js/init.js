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
}, {
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
}, {
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
}, {
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

// chrome.storage.sync.set({
//   ttLayouts: Layouts
// });
var threshold = 10; //how much pixels to tolerate when calculating if a window is within the bounderies of a screen or not
function getLayoutByName(name) {
  for (l of Layouts) {
    if (l.name == name)
      return l;
  }
}

function getTargetMonitor(selectedSlot, passedMonitors = 0) {
  slotsCount = 0;
  if (passedMonitors == 0)
    passedMonitors = Monitors
  for (m of passedMonitors) {
    var min = slotsCount;
    if (m.useThis != 'no')
      slotsCount += m.layout.slots
    var max = slotsCount;
    if (selectedSlot > min && selectedSlot <= max)
      return m;
  }
}
// //get monitors information  
var Monitors;
var slotsConfig;
chrome.runtime.sendMessage({
  action: "getMonitors"
}, function (result) {
  Monitors = result.response;
  for (var i in Monitors) {
    Monitors[i].layoutName = Monitors[i].layout
    Monitors[i].layout = getLayoutByName(Monitors[i].layout)
    Monitors[i].class = Monitors[i].layout.class
    var dotsSoFar = 0;
    for (var j = 0; j < i; j++) {
      if (Monitors[j].useThis != "no")
        dotsSoFar += Monitors[j].layout.slots;
    }
    Monitors[i].dotsSoFar = dotsSoFar
    Monitors[i].startingDotNumber = dotsSoFar + 1
    Monitors[i].firstWindow = 0
  }
});