import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { IProfileSideBarProps } from "../../models/interfaces";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Logo } from "..";

export const ProfileSideBar = ({
  children,
  selectedPage,
}: IProfileSideBarProps) => {
  // Initialize necessary hooks and variables
  const [pageState, setPageState] = useState<
    "userInfo" | "accountInfo" | "accountSetting"
  >("userInfo");
  const [t] = useTranslation("translation");

  // Function to handle button clicks and update the selected page
  const handleClick = (state: string) => {
    if (
      state === "userInfo" ||
      state === "accountInfo" ||
      state === "accountSetting"
    ) {
      setPageState(state);
      selectedPage(state);
    }
  };

  return (
    <div className="flex w-full h-[100vh]">
      {/* Sidebar */}
      <Paper
        sx={{
          width: "30%",
          minWidth: 300,
          height: "100%",
          backgroundColor: "background.default",
          boxShadow: 15,
          paddingY: 5,
          paddingX: 3,
        }}>
        {/* Logo */}
        <Logo />
        {/* Back button */}
        <div className="mt-[50px]">
          <Button
            color="primary"
            variant="contained"
            sx={{ fontWeight: 600, color: "background.default" }}>
            <ArrowBackIcon
              fontSize="small"
              className={
                document.body.dir === "rtl"
                  ? "transform rotate-180 ml-2"
                  : "mr-2"
              }
            />
            {t("btn.back")}
          </Button>
        </div>

        {/* Sidebar buttons */}
        <div className="flex flex-col justify-between h-[150px] my-[100px]">
          {[
            {
              label: t("btn.profile.userInfo"),
              icon: <PersonIcon sx={{ marginLeft: 1 }} />,
              state: "userInfo",
            },
            {
              label: t("btn.profile.accountInfo"),
              icon: <AccountBoxIcon fontSize="large" sx={{ marginLeft: 1 }} />,
              state: "accountInfo",
            },
            {
              label: t("btn.profile.accountSetting"),
              icon: <ManageAccountsIcon sx={{ marginLeft: 1 }} />,
              state: "accountSetting",
            },
          ].map(({ label, icon, state }) => (
            <Button
              key={state}
              variant={pageState === state ? "contained" : "outlined"}
              color="inherit"
              onClick={() => handleClick(state)}
              sx={{
                justifyContent: "flex-start",
                border: 2,
                fontWeight: 600,
                color: "primary.main",
                backgroundColor: `${
                  pageState === state ? "background.paper" : "transparent"
                }`,
              }}
              startIcon={icon}>
              {label}
            </Button>
          ))}
        </div>
      </Paper>

      {/* Main content */}
      <div className="w-full h-full flex flex-col justify-center p-[60px]">
        {children}
      </div>
    </div>
  );
};
