import * as React from "react";
import { Background, ProfileSideBar } from "../../../components";
import { AccountInfo, AccountSetting, UserInfo } from "..";

export const ProfileLayout = () => {
  const [selectedPage, setSelectedPage] = React.useState<
    "userInfo" | "accountInfo" | "accountSetting"
  >("userInfo");

  const whatPage = (page: "userInfo" | "accountInfo" | "accountSetting") => {
    React.startTransition(() => {
      setSelectedPage(page);
    });
  };

  return (
    <>
      <Background />
      <ProfileSideBar selectedPage={whatPage}>
        {selectedPage === "userInfo" && <UserInfo />}
        {selectedPage === "accountInfo" && <AccountInfo />}
        {selectedPage === "accountSetting" && <AccountSetting />}
      </ProfileSideBar>
    </>
  );
};
