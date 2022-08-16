import ReactDOM from "react-dom";
import FormDialog from "roamjs-components/components/FormDialog";
import { Button } from "@blueprintjs/core";
import { useState } from "react";

const Extension = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} text={"Open Form"} />
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
  ReactDOM.render(<Extension />, document.querySelector(".roam-article"));
}
