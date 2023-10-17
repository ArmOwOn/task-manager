import { Paper, useTheme } from "@mui/material";

export const BackgroundShape = () => {
  const theme = useTheme();
  return (
    <div className="absolute top-0 left-0 flex flex-col-reverse w-full h-[100vh] z-[-9]">
      <Paper
        sx={{
          clipPath: `polygon(0 70%, 100% 40%, 100% 100%, 0% 100%)`,
          width: 1,
          height: 1,
          background: `linear-gradient(90deg, ${theme.palette.secondary.main} 10%, ${theme.palette.primary.main}  100%)`,
        }}
      />
    </div>
  );
};
