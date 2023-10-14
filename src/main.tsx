import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import themes from "./styles/theme";
import App from "./app/App.tsx";
import "./models/i18next.tsx";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={themes.blueLight}>
    <React.StrictMode>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
