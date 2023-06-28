import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(3, 5)}</li>
    <li>{subtract(7, 3)}</li>
    <li>{divide(15, 5)}</li>
  </ul>,
  document.getElementById("root")
);
