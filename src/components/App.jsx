import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

import TicTacToe from "./Test.jsx";

export function renderApp() {
  const block = document.getElementById(
    "block-input-Ex3lB2F6lbcG2lBxdsJzPNzQXn53-body-outline-Qac5ayIRD-mm-x0Ulgm"
  );
  const top = document.getElementsByClassName("roam-lift-modal")[0];
  // block.addEventListener("click", (event) => {
  //   console.log(event);
  //   event.preventDefault();
  // });
  const root = document.createElement("div");
  //block.innerHTML = "";
  //block.parentElement.parentElement.appendChild(root);
  top.appendChild(root);

  ReactDOM.render(<TicTacToe />, root);
}
