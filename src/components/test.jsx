//import React from "react";
import ReactDOM from "react-dom";

const Test = () => {
  return <div>"Hello Roam!"</div>;
};
export function runTest() {
  let domElt = document.getElementsByClassName("rm-topbar")[0];
  console.log(domElt);
  ReactDOM.render(<Test />, domElt);
}

//export default Test;
