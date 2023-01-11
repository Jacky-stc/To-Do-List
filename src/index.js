import React from "react";
import ReactDOM from "react-dom/client";
import App from "./APP";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.body);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
