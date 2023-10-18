import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Button, Typography, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { IProfileSideBarProps } from "../../models/interfaces";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ProfileSideBar = ({
  children,
  selectedPage,
}: IProfileSideBarProps) => {
  // Initialize necessary hooks and variables
  const [pageState, setPageState] = useState<
    "userinfo" | "accountinfo" | "accountsetting"
  >("userinfo");
  const [t] = useTranslation("translation");
  const theme = useTheme();

  // Function to handle button clicks and update the selected page
  const handleClick = (state: string) => {
    if (
      state === "userinfo" ||
      state === "accountinfo" ||
      state === "accountsetting"
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
        <Typography
          variant="h5"
          mx={1}
          sx={{
            color: "transparent",
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 20%, ${theme.palette.secondary.main}  100%)`,
            fontWeight: 800,
            fontSize: 30,
            WebkitBackgroundClip: "text",
          }}>
          {t("navBar.logo")}
        </Typography>
        {/* Back button */}
        <div className="mt-[50px]">
          <Button color="primary" variant="contained" sx={{ fontWeight: 600 }}>
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
              state: "userinfo",
            },
            {
              label: t("btn.profile.accountInfo"),
              icon: <AccountBoxIcon fontSize="large" sx={{ marginLeft: 1 }} />,
              state: "accountinfo",
            },
            {
              label: t("btn.profile.accountSetting"),
              icon: <ManageAccountsIcon sx={{ marginLeft: 1 }} />,
              state: "accountsetting",
            },
          ].map(({ label, icon, state }) => (
            <Button
              key={state}
              variant={pageState === state ? "contained" : "outlined"}
              onClick={() => handleClick(state)}
              sx={{
                justifyContent: "flex-start",
                border: 2,
                fontWeight: 600,
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
