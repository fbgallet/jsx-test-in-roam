import React from "react";
import ReactDOM from "react-dom";
import FormDialog from "roamjs-components/components/FormDialog";
import { Button } from "@blueprintjs/core";
import { useState } from "react";
import createOverlayRender from "roamjs-components/util/createOverlayRender";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <FormDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(data) => window.alert(`User value selected: ${data.text}`)}
        fields={{
          text: { type: "text", label: "Text Field" },
        }}
      />
    </>
  );
};

export function displayForm() {
  //ReactDOM.render(<Dialog />, document.querySelector(".roam-article"));
  ReactDOM.render(<Dialog />, document.querySelector(".roam-article"));
}
