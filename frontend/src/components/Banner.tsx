import { AccountCircle } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Colors } from "constants/Colors";
import React from "react";

export function Banner(props: {
  signedIn: boolean;
  setSignedIn: (b: boolean) => void;
}) {
  const { signedIn, setSignedIn } = props;

  return (
    <Box
      display={"flex"}
      bgcolor={Colors.secondary}
      padding={1}
      flex={1}
      marginBottom={"10px"}
      justifyContent={"space-between"}
      fontWeight={"bold"}
      alignItems={"center"}
    >
      <Box marginLeft={"20px"}>Chris Young</Box>
      <Box>Carallel Application</Box>
      <Box color={signedIn ? Colors.midnight : Colors.dark}>
        <IconButton color={"inherit"} onClick={() => setSignedIn(!signedIn)}>
          <AccountCircle />
        </IconButton>
      </Box>
    </Box>
  );
}
