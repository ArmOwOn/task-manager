import { Box, Typography } from "@mui/material";
import { IAuthContainerProp } from "../../models/interfaces";

export const AuthContainer = ({ header, children }: IAuthContainerProp) => {
  return (
    <Box
      sx={{
        maxWidth: 500,
        backgroundColor: "background.default",
        borderRadius: 5,
        boxShadow: "0px 0px 10px lightgray",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}>
      <Typography fontSize={30} variant="h3" fontWeight={800} mb={4} mt={1}>
        {header}
      </Typography>
      <div className="w-full">{children}</div>
    </Box>
  );
};
