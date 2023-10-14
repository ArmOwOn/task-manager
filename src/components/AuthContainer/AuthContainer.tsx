import { Box, Typography } from "@mui/material";
import { IAuthContainerProp } from "../../types/interfaces";

export const AuthContainer = ({ header, children }: IAuthContainerProp) => {
  return (
    <Box
      sx={{
        width: 600,
        backgroundColor: "background.default",
        borderRadius: 5,
        boxShadow: "0px 0px 10px lightgray",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}>
      <Typography fontSize={30} variant="h3" fontWeight={800} mb={3}>
        {header}
      </Typography>
      <div className="w-full">{children}</div>
    </Box>
  );
};
