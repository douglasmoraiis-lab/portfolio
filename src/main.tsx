import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
