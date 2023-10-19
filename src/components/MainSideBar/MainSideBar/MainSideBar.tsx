import { Avatar, IconButton, Paper, Typography } from "@mui/material";
import { DarkMode, LangToggle, Logo } from "../..";
import { WorkSpaces } from "..";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {
  children: React.ReactNode;
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const MainSideBar = ({ children }: Props) => {
  return (
    <div className="flex w-full h-[100vh]">
      {/* Sidebar */}
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "25%",
          minWidth: 300,
          backgroundColor: "background.default",
          boxShadow: 15,
          paddingY: 5,
          paddingX: 3,
        }}>
        {/* Logo */}
        <div>
          <div className="mb-10">
            <Logo />
          </div>

          {/* Work Spaces */}
          <WorkSpaces />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Avatar {...stringAvatar("Kent Dodds")} />
            <Typography fontSize={15} fontWeight={600} color="text.primary">
              Kent Dodds
            </Typography>
          </div>
          <Paper
            sx={{
              display: "flex",
              width: 1,
              justifyContent: "space-between",
              borderRadius: 50,
            }}>
            {/* Log Out */}
            <IconButton aria-label="fingerprint" color="primary">
              <LogoutIcon />
            </IconButton>
            {/* Dark & Light Mod */}
            <DarkMode />
            {/* Language Change */}
            <LangToggle />
          </Paper>
        </div>
      </Paper>
      {/* Main content */}
      <div className="w-full h-[100vh] flex flex-col px-[20px]">{children}</div>
    </div>
  );
};
