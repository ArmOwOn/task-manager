import { Typography, Paper, Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ColorPicker, LangToggle, DarkMode } from "../../../components";
import { IThemeChangerState } from "../../../models/interfaces";
import { themeChange } from "../../../features";
import { useSelector, useDispatch } from "react-redux";

export const AccountSetting = () => {
  // Initialize necessary hooks and variables;
  const theme = useSelector(
    (state: IThemeChangerState) => state.themeChanger.theme
  );
  const dispatch = useDispatch();
  const [t] = useTranslation("transolation");

  const selectedColor = (color: string) => {
    const newTheme = theme.includes("Light") ? `${color}Light` : `${color}Dark`;
    dispatch(themeChange(newTheme));
  };

  return (
    <>
      {/* Account Setting Header */}
      <Typography
        fontSize={30}
        variant="h3"
        fontWeight={800}
        color="text.primary"
        mb={6}>
        {t("btn.profile.accountSetting")}
      </Typography>

      {/* Theme picker */}
      <Typography
        fontSize={15}
        fontWeight={600}
        color="text.primary"
        sx={{ paddingX: 3 }}>
        {t("accountSetting.themes")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          marginBottom: 5,
          marginTop: 1,
          paddingTop: 3,
          border: 3,
          borderColor: "primary.main",
          borderRadius: 50,
          overflow: "hidden",
          background: `linear-gradient(90deg, ${
            useTheme().palette.secondary.main
          } 0%, ${useTheme().palette.primary.main}  100%)`,
        }}>
        <Paper
          sx={{
            backgroundColor: "background.paper",
            paddingX: 2,
          }}>
          <ColorPicker selectedColor={selectedColor} />
        </Paper>
      </Box>
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
