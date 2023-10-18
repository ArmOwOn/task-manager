import { Box, Typography } from "@mui/material";
import { IAuthContainerProps } from "../../models/interfaces";

export const AuthContainer = ({ header, children }: IAuthContainerProps) => {
  return (
    <Box
      sx={{
        width: 600,
        backgroundColor: "background.default",
        borderRadius: 5,
        boxShadow: 6,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
      className="brightness-120">
      <Typography
        fontSize={30}
        variant="h3"
        fontWeight={800}
        mb={4}
        mt={1}
        color="text.primary">
        {header}
      </Typography>
      <div className="w-full">{children}</div>
    </Box>
  );
};
