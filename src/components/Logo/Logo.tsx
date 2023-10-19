import { Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Logo = () => {
  // Initialize necessary hooks and variables
  const theme = useTheme();
  const [t] = useTranslation("transolation");

  return (
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
  );
};
