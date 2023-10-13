import { useAuth0 } from "@auth0/auth0-react";
import { AccountCircle } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Colors } from "constants/Colors";
import React from "react";

export function Banner() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  function signout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  function signin() {
    loginWithRedirect();
  }

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
      <Box color={isAuthenticated ? Colors.midnight : Colors.dark}>
        <IconButton
          color={"inherit"}
          onClick={isAuthenticated ? signout : signin}
        >
          <AccountCircle />
        </IconButton>
      </Box>
    </Box>
  );
}
