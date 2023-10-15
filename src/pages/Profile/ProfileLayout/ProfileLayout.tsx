import { useState } from "react";
import { Background, NavBar, ProfileSideBar } from "../../../components";
import { AccountInfo, AccountSetting, UserInfo } from "..";

export const ProfileLayout = () => {
  const [selectedPage, setSelectedPage] = useState<
    "userinfo" | "accountinfo" | "accountsetting"
  >("userinfo");

  const whatPage = (page: "userinfo" | "accountinfo" | "accountsetting") => {
    setSelectedPage(page);
  };

  return (
    <>
      <NavBar />
      <Background />
      <ProfileSideBar selectedPage={whatPage}>
        {selectedPage === "userinfo" && <UserInfo />}
        {selectedPage === "accountinfo" && <AccountInfo />}
        {selectedPage === "accountsetting" && <AccountSetting />}
      </ProfileSideBar>
    </>
  );
};
