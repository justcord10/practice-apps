import React from "react";
import { render } from "react-dom";

render(
  <div>
    <p>Checkout</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
  </div>,
  document.getElementById("root")
);
