// import { displayForm } from "./components/formDialog";
// import { displaySelect } from "./components/select";
// import { displayPopover } from "./components/popOver";
// import createButtonObserver from "roamjs-components/dom/createButtonObserver";
// import getUidsFromButton from "roamjs-components/dom/getUidsFromButton";
// import getTextByBlockUid from "roamjs-components/queries/getTextByBlockUid";

import { renderApp } from "./components/App";
import { Slider } from "@blueprintjs/core";
let sliderCustomValue;
// import React from "react";
// import ReactDOM from "react-dom";
// import SelectSuggest from "./components/suggest";

//runTest();
//displayForm();
// function test() {
//   createButtonObserver({
//     attribute: "Open",
//     shortcut: "dialog",
//     render: (b) => {
//       b.onclick = (e) => {
//         const { blockUid } = getUidsFromButton(b);
//         const text = getTextByBlockUid(blockUid);
//         console.log(blockUid);
//         //const parts = (/{{([^}]+)}}/.exec(text)?.[1] || "").split(":");
//         // displayForm();
//         displaySelect(e.target);
//         // displayPopover();
//         //const rootElement = document.getElementById("roam-article");
//         //ReactDOM.render(<SelectSuggest />, rootElement);
//       };
//     },
//   });
// }

// function getSelectedBlocksUid(getCollapsed = false) {
//   let uids = [];
//   let selectedBlocks = document.querySelectorAll(".block-highlight-blue");
//   selectedBlocks.forEach((block) => {
//     uids.push(block.querySelector(".rm-block-text").id.slice(-9));
//   });
//   return uids;
// }

function reactButton() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return React.createElement(
    "button",
    { className: "bp3-button", onClick: () => setCount(count + 1) },
    "my button " + count
  );
}

function blueprintSlider({ extensionAPI }) {
  const [sliderValue, setSliderValue] = React.useState(
    extensionAPI.settings.get("Slider")
  );
  return React.createElement(Slider, {
    className: "slider",
    min: 0,
    max: 100,
    stepSize: 5,
    labelStepSize: 50,
    value: sliderValue,
    onChange: (value) => {
      setSliderValue(value);
      extensionAPI.settings.set("Slider", value);
    },
  });
}

export default {
  onload: ({ extensionAPI }) => {
    if (!extensionAPI.settings.get("Slider"))
      extensionAPI.settings.set("Slider", 20);

    const wrappedBlueprintSlider = () => blueprintSlider({ extensionAPI });

    const panelConfig = {
      tabTitle: "Test Ext 1",
      settings: [
        {
          id: "button-setting",
          name: "Button test",
          description: "tests the button",
          action: {
            type: "button",
            onClick: (evt) => {
              console.log("Button clicked!");
            },
            content: "Button",
          },
        },
        {
          id: "reactComponent-setting",
          name: "React Button",
          action: { type: "reactComponent", component: reactButton },
        },
        {
          id: "Slider",
          name: "React Slider",
          action: { type: "reactComponent", component: wrappedBlueprintSlider },
        },
      ],
    };

    extensionAPI.settings.panel.create(panelConfig);

    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Test React App",
      callback: async () => {
        /*let caretPos = document.activeElement.selectionStart;
        left = blockContent.substring(0,caretPos);
        right = blockContent.slice(caretPos);*/
        // let startUid = window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"];
        // console.log(startUid);
        // let b = getSelectedBlocksUid();
        console.log(extensionAPI.settings.get("Slider"));
        renderApp();
      },
    });

    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Test pullwatch",
      callback: async () => {
        window.roamAlphaAPI.data.addPullWatch(
          "[:block/children :block/string {:block/children ...}]",
          '[:block/uid "mm-x0Ulgm"]',
          function a(before, after) {
            console.log("before", before, "after", after);
          }
        );
      },
    });

    console.log("Test JSX loaded.");
  },
  onunload: () => {
    console.log("Test JSX unloaded.");
  },
};
