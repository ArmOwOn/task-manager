import * as React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector, useDispatch } from "react-redux";
import { themeChange } from "../../../features/themeChanger/themeChangerSlice";

export const DarkMode = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme = useSelector((state: any) => state.themeChanger.theme);
  const dispatch = useDispatch();
  const handleClick = () => {
    const newTheme = theme.includes("Light")
      ? theme.replace("Light", "Dark")
      : theme.replace("Dark", "Light");
    dispatch(themeChange(newTheme));
  };

  return (
    <IconButton
      onClick={handleClick}
      color="inherit"
      sx={{ color: "primary.main" }}>
      {theme.includes("Dark") ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
