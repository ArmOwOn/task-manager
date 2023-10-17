import { Typography, Box, Button, Toolbar, useTheme } from "@mui/material";
import { LangToggle } from "../LangToggle/LangToggle";
import { DarkMode } from "../DarkMode/DarkMode";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const theme = useTheme();
  const [t] = useTranslation("transolation");

  return (
    <div className="absolute z-10 w-full">
      <Box
        sx={{
          paddingX: "20px",
          flexGrow: 1,
        }}>
        <Box
          position="static"
          sx={{
            paddingTop: "40px",
            backgroundColor: "transparent",
            boxShadow: 0,
          }}>
          <Toolbar className="justify-between text-left">
            <div className="flex items-center">
              <Typography
                variant="h4"
                mx={1}
                sx={{
                  color: "transparent",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 20%, ${theme.palette.secondary.main}  100%)`,
                  fontWeight: 800,
                  WebkitBackgroundClip: "text",
                }}>
                {t("navBar.logo")}
              </Typography>
              <div className="mx-5">
                <LangToggle />
                <DarkMode />
              </div>
            </div>
            <div className="flex items-center">
              <Typography fontSize={15} mx={1} sx={{ color: "text.primary" }}>
                {t("navBar.massage.notHave")}
              </Typography>
              <Button
                color="primary"
                variant="contained"
                sx={{ fontWeight: 600 }}>
                {t("btn.login")}
              </Button>
            </div>
          </Toolbar>
        </Box>
      </Box>
    </div>
  );
};
