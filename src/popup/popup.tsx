import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => <p>Popup page</p>;

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
// ReactDom.render(Popup, root);
root.render(<Popup />);

export default Popup;
