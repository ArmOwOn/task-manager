import {
  AuthLayout,
  ForgotPass,
  Login,
  MainLayout,
  ProfileLayout,
  Register,
  ResetPass,
} from "../pages";
import { ThemeProvider } from "@mui/material/styles";
import themes from "../styles/theme";
import { IThemeChangerState } from "../models/interfaces";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { IThemes } from "../models/interfaces";
import { useSelector } from "react-redux";

function App() {
  const theme: IThemes = useSelector(
    (state: IThemeChangerState) => state.themeChanger.theme
  );
  return (
    <ThemeProvider theme={themes[theme]}>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/authentication" element={<AuthLayout />}>
          <Route path="/authentication" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpass" element={<ResetPass />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />}></Route>
        <Route path="/main" element={<MainLayout />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
