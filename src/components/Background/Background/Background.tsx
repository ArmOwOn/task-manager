import { Box } from "@mui/material";

export const Background = () => {
  return (
    <Box
      className="absolute top-0 left-0 flex flex-col-reverse w-full h-[100vh] z-[-10] brightness-125"
      sx={{ backgroundColor: "background.default" }}
    />
  );
};
