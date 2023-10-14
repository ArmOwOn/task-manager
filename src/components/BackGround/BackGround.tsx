import { Box, useTheme } from "@mui/material";

export const BackGround = () => {
  const theme = useTheme();
  return (
    <div className="absolute top-0 left-0 flex flex-col-reverse w-full h-[100vh] z-[-10]">
      <Box
        sx={{
          clipPath: `polygon(0 74%, 100% 33%, 100% 100%, 0% 100%)`,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.background.paper,
        }}
      />
    </div>
  );
};
