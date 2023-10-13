import { Box } from "@mui/material";
import React from "react";
import { ContentBox } from "./ContentBox";
import { LoginButton } from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function StatusButton() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <LogoutButton />;
  }
  return <LoginButton />;
}

export function StatusBox() {
  const { user, isAuthenticated } = useAuth0();

  const statusMessage = isAuthenticated
    ? `Welcome, ${user.name}`
    : "Please Sign In";
  return (
    <ContentBox>
      <Box display={"flex"} flex={1} justifyContent={"space-between"}>
        <Box>{statusMessage}</Box>
        <StatusButton />
      </Box>
    </ContentBox>
  );
}
