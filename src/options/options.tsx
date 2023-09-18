import React from "react";
import { createRoot } from "react-dom/client";

const Options = () => (
  <div>
    <p>Hello from Options page</p>
    <img src="icon.png" />
  </div>
);
const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Options />);

export default Options;
