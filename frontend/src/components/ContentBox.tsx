import { Box } from "@mui/material";
import { Colors } from "constants/Colors";
import React from "react";

export function ContentBox(props: { children?: any }) {
  const { children } = props;
  return (
    <Box
      padding={2}
      bgcolor={Colors.primary}
      borderRadius={"10px"}
      margin={1}
      flex={1}
      sx={{ boxShadow: `10px 10px 36px -8px ${Colors.midnight}` }}
    >
      {children}
    </Box>
  );
}
