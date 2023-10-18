import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import themes from "./styles/theme";
import App from "./app/App.tsx";
import "./models/i18next.tsx";
import React from "react";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={themes.brandLight}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
