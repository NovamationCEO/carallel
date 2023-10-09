import React from "react";
import { LoginButton } from "./LoginButtonDefault";
import { Box, IconButton } from "@mui/material";
import { Colors } from "constants/Colors";
import { ContentBox } from "./ContentBox";
import { AccountCircle } from "@mui/icons-material";
import { StatusBox } from "./StatusBox";
import { AdditionalBox } from "./AdditionalBox";
import { ListBox } from "./ListBox";
import { Banner } from "./Banner";

export function MainPage() {
  const [signedIn, setSignedIn] = React.useState(false);
  const backgroundGradient = `linear-gradient(333deg, rgba(255,255,255,1) 64%, ${Colors.light} 100%)`;

  return (
    <Box
      flex={1}
      height={"calc(100vh - 20px)"}
      width={"100vw"}
      position={"relative"}
      sx={{
        background: backgroundGradient,
      }}
    >
      <Banner signedIn={signedIn} setSignedIn={setSignedIn} />
      <Box display={"flex"} padding={1}>
        <Box flex={1} flexDirection={"column"}>
          <StatusBox signedIn={signedIn} />
          <AdditionalBox />
        </Box>
        <Box flex={3}>
          <ListBox signedIn={signedIn} />
        </Box>
      </Box>
    </Box>
  );
}
