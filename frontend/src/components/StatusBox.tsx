import { Box } from "@mui/material";
import React from "react";
import { ContentBox } from "./ContentBox";
import { LoginButton } from "./LoginButtonDefault";

function StatusButton(props: { signedIn: boolean }) {
  const { signedIn } = props;

  if (signedIn) {
    return <button onClick={() => {}}>Sign Out</button>;
  }
  return <LoginButton />;
}

export function StatusBox(props: { signedIn: boolean }) {
  const { signedIn } = props;
  const statusMessage = signedIn ? "Welcome, User" : "Please Sign In";
  return (
    <ContentBox>
      <Box display={"flex"} flex={1} justifyContent={"space-between"}>
        <Box>{statusMessage}</Box>
        <StatusButton signedIn={signedIn} />
      </Box>
    </ContentBox>
  );
}
