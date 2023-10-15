import {
  AuthLayout,
  ForgotPass,
  Login,
  ProfileLayout,
  Register,
  ResetPass,
} from "../pages";

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" />} />
      <Route path="/authentication" element={<AuthLayout />}>
        <Route path="/authentication" element={<Navigate to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpass" element={<ForgotPass />} />
        <Route path="register" element={<Register />} />
        <Route path="resetpass" element={<ResetPass />} />
      </Route>
      <Route path="/profile" element={<ProfileLayout />}></Route>
    </Routes>
  );
}

export default App;
