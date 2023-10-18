import { Typography, Paper } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ColorPicker } from "../../../components";
import { DarkMode } from "../../../components/NavBar/DarkMode/DarkMode";
import { LangToggle } from "../../../components/NavBar/LangToggle/LangToggle";
import Cookies from "js-cookie";

export const AccountSetting = () => {
  // Initialize necessary hooks and variables;
  const [theme, setTheme] = React.useState(
    Cookies.get("theme") || "brandlight"
  );
  const [t] = useTranslation("transolation");

  const selectedColor = (color: string) => {
    const newTheme = theme.includes("Light") ? `${color}Light` : `${color}Dark`;
    setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
  };

  return (
    <>
      {/* Account Setting Header */}
      <Typography fontSize={30} variant="h3" fontWeight={800} mb={6}>
        {t("btn.profile.userInfo")}
      </Typography>

      {/* Theme picker */}
      <p>{t("accountSetting.themes")}</p>
      <div className="mb-10">
        <ColorPicker selectedColor={selectedColor} />
      </div>
      <Paper
        sx={{
          display: "flex",
          width: 120,
          justifyContent: "space-between",
          borderRadius: 50,
        }}>
        {/* Dark & Light Mod */}
        <DarkMode />
        {/* Language Change */}
        <LangToggle />
      </Paper>
    </>
  );
};
