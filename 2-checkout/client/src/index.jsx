import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';

render(
  <div>
    <p>Checkout</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <div><App cookie={JSON.stringify(document.cookie, undefined, "\t")}/></div>
  </div>,
  document.getElementById("root")
);
