import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const Popup = () => (
  <div>
    <p>Popup page</p>
    <img src="icon.png" />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
// ReactDom.render(Popup, root);
root.render(<Popup />);

export default Popup;
