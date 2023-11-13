import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';

render(
  <div>
    <h1>Checkout</h1>
    <div><App cookie={JSON.stringify(document.cookie, undefined, "\t")}/></div>
  </div>,
  document.getElementById("root")
);
//this chunk of code will render a pages cookie
{/* <p>
<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
</p> */}