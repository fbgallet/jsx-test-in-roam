import React from "react";
import ReactDOM from "react-dom";
import FormDialog from "roamjs-components/components/FormDialog";
import { Button } from "@blueprintjs/core";
import { useState } from "react";
import renderOverlay from "roamjs-components/util/renderOverlay";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <FormDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(data) => window.alert(`User value selected: ${data.text}`)}
        fields={{
          text: { type: "text", label: "Texts Field" },
          page: { type: "page", label: "Choose a page" },
          select: {
            type: "select",
            label: "Select something:",
            options: ["A", "B", "C"],
          },
          flag: { type: "flag", label: "Remove button ?" },
        }}
      />
    </>
  );
};

export function displayForm() {
  //ReactDOM.render(<Dialog />, document.querySelector(".roam-article"));
  renderOverlay({
    Overlay: Dialog,
  });
}
