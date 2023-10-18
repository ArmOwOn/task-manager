import { Typography, Paper } from "@mui/material";
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
        {t("btn.profile.userInfo")}
      </Typography>

      {/* Theme picker */}
      <Typography fontSize={15} color="text.primary">
        {t("accountSetting.themes")}
      </Typography>
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
