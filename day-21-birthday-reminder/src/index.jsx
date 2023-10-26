import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./index.css";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
