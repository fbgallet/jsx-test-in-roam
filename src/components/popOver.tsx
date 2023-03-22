import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Intent,
  Popover,
  PopoverInteractionKind,
  Position,
} from "@blueprintjs/core";

const PopoverDisplay = () => {
  // popover content gets no padding by default; add the "bp4-popover-content-sizing"
  // class to the popover to set nice padding between its border and content,
  // and a default width when inline.
  return (
    <Popover
      interactionKind={PopoverInteractionKind.CLICK}
      popoverClassName="bp4-popover-content-sizing"
      content={"bla bla"}
      target={
        "#block-input-Ex3lB2F6lbcG2lBxdsJzPNzQXn53-body-outline-12-29-2022-IGiAMz_K8"
      }
    ></Popover>
  );
};

export function displayPopover() {
  ReactDOM.render(
    <PopoverDisplay />,
    document.querySelector(
      "#block-input-Ex3lB2F6lbcG2lBxdsJzPNzQXn53-body-outline-12-29-2022-IGiAMz_K8"
    )
  );
}
