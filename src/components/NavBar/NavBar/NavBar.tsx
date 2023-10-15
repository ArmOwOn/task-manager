import { Typography, Box, AppBar, Button, Toolbar } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { LangToggle } from "../LangToggle/LangToggle";
import { DarkMode } from "../DarkMode/DarkMode";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const [t] = useTranslation("transolation");

  return (
    <div className="absolute z-10 w-full">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="justify-between text-left">
            <div className="flex items-center">
              <AssignmentIcon fontSize="large" />
              <Typography variant="h6" mx={1} component="div" className="">
                {t("navbar.logo")}
              </Typography>
              <div className="mx-5">
                <LangToggle />
                <DarkMode />
              </div>
            </div>
            <div className="flex items-center">
              <Typography fontSize={15} mx={1}>
                {t("navbar.massage.nothave")}
              </Typography>
              <Button
                color="inherit"
                sx={{
                  backgroundColor: "secondary.main",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}>
                {t("btn.login")}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
