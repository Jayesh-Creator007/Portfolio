import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PortfolioModeProvider } from "./context/PortfolioModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioModeProvider>
      <App />
    </PortfolioModeProvider>
  </React.StrictMode>
);