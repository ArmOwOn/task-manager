import { Outlet } from "react-router-dom";
import { BackGround, NavBar } from "../../../components";

export const AuthLayout = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <Outlet />
      </div>
      <BackGround />
    </>
  );
};
