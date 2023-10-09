import { Box } from "@mui/material";
import { Colors } from "constants/Colors";
import React from "react";

export function ContentBox(props: { flex?: number; children?: any }) {
  const { flex, children } = props;
  return (
    <Box
      padding={1}
      bgcolor={Colors.primary}
      borderRadius={"10px"}
      margin={1}
      flex={flex}
      sx={{ boxShadow: `10px 10px 36px -10px ${Colors.midnight}` }}
    >
      {children}
    </Box>
  );
}
