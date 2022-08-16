import { displayForm } from "./components/formDialog";
import createButtonObserver from "roamjs-components/dom/createButtonObserver";
import getUidsFromButton from "roamjs-components/dom/getUidsFromButton";
import getTextByBlockUid from "roamjs-components/queries/getTextByBlockUid";

//runTest();
//displayForm();

createButtonObserver({
  attribute: "Open",
  shortcut: "dialog",
  render: (b) => {
    b.onclick = () => {
      const { blockUid } = getUidsFromButton(b);
      const text = getTextByBlockUid(blockUid);
      console.log(blockUid);
      //const parts = (/{{([^}]+)}}/.exec(text)?.[1] || "").split(":");
      displayForm();
    };
  },
});
