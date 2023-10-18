import * as React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Cookies from "js-cookie";

export const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    Cookies.get("theme") || "brandlight"
  );

  const handleClick = () => {
    const newTheme = theme.includes("Light")
      ? theme.replace("Light", "Dark")
      : theme.replace("Dark", "Light");
    setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
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
