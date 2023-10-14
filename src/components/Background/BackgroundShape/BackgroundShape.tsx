import { Paper } from "@mui/material";

export const BackgroundShape = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col-reverse w-full h-[100vh] z-[-9]">
      <Paper
        sx={{
          clipPath: `polygon(0 74%, 100% 33%, 100% 100%, 0% 100%)`,
          width: 1,
          height: 1,
          backgroundColor: "background.paper",
        }}
      />
    </div>
  );
};
