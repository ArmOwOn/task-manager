import { Typography, Box, Button, Toolbar } from "@mui/material";
import { LangToggle, DarkMode } from "..";
import { useTranslation } from "react-i18next";
import { Logo } from "../..";

export const NavBar = () => {
  // Initialize necessary hooks and variables
  const [t] = useTranslation("transolation");

  return (
    <div className="absolute z-10 w-full">
      <Box sx={{ paddingX: "20px", flexGrow: 1 }}>
        <Box
          position="static"
          sx={{
            paddingTop: "40px",
            backgroundColor: "transparent",
            boxShadow: 0,
          }}>
          <Toolbar className="justify-between text-left">
            {/* Left side of the navbar */}
            <div className="flex items-center">
              {/* Logo */}
              <Logo />
              {/* Language toggle and Dark mode components */}
              <div className="mx-5">
                <LangToggle />
                <DarkMode />
              </div>
            </div>

            {/* Right side of the navbar */}
            <div className="flex items-center">
              {/* Message */}
              <Typography fontSize={15} mx={1} color="text.primary">
                {t("navBar.message.notHave")}
              </Typography>
              {/* Login button */}
              <Button
                color="primary"
                variant="contained"
                sx={{ fontWeight: 600, color: "background.default" }}>
                {t("btn.login")}
              </Button>
            </div>
          </Toolbar>
        </Box>
      </Box>
    </div>
  );
};
