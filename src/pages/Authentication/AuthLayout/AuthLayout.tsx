import { Outlet } from "react-router-dom";
import { Background, BackgroundShape, NavBar } from "../../../components";

export const AuthLayout = () => {
  return (
    <>
      <NavBar />
      <Background />
      <BackgroundShape />
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </>
  );
};
