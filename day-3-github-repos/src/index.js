import React ,{StrictMode} from "react";
import ReactDom from "react-dom/client";
import App from "./containers/App/App";
import "./style/style.scss";
const el = document.getElementById("root");
const root = ReactDom.createRoot(el);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
