import { Typography, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import ErrorIcon from "@mui/icons-material/Error";

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}
function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 100,
      height: 100,
      fontSize: 50,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const UserInfo = () => {
  const userName = "Arman Seydi";

  const [t] = useTranslation("translation");

  return (
    <div className="bg-green-primary flex flex-col w-[400px] h-[600px]">
      <div>
        <Typography fontSize={30} variant="h3" fontWeight={800} mb={6}>
          {t("btn.profile.userinfo")}
        </Typography>
      </div>
      <div className="flex items-center gap-4">
        <Avatar {...stringAvatar(userName)} />
        <Typography fontSize={25} variant="h5" fontWeight={600}>
          {userName}
        </Typography>
      </div>
      <div className="flex items-center mb-3">
        <ErrorIcon fontSize="small" sx={{ marginX: 1 }} />
        {t("userinfo.profile.warning")}
      </div>
    </div>
  );
};
