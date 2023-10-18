import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./models/i18next.tsx";
import React from "react";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={themes.brandLight}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
