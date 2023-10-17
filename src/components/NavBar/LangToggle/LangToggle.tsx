import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { useEffect } from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PublicIcon from "@mui/icons-material/Public";

export const LangToggle = () => {
  const currentLanguageDir = cookies.get("i18next") === "fa" ? "rtl" : "ltr";
  const [, i18n] = useTranslation("transolation");
  const hanldeChangeLang = () => {
    i18n.changeLanguage(cookies.get("i18next") === "fa" ? "en" : "fa");
    window.location.reload();
  };
  useEffect(() => {
    document.body.dir = currentLanguageDir;
    document.title =
      currentLanguageDir === "rtl" ? "مدیریت وظایف" : "Task Manager";
  }, [currentLanguageDir]);
  return (
    <IconButton
      onClick={() => hanldeChangeLang()}
      color="inherit"
      sx={{ color: "primary.main" }}>
      <Typography fontSize={15}>
        <PublicIcon />
      </Typography>
    </IconButton>
  );
};
