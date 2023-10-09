import React from "react";
import { LoginButton } from "./LoginButtonDefault";
import { Box } from "@mui/material";
import { Colors } from "constants/Colors";
import { ContentBox } from "./ContentBox";

export function MainPage() {
  return (
    <Box
      flex={1}
      height={"calc(100vh - 20px)"}
      width={"100vw"}
      position={"relative"}
      sx={{
        background: `linear-gradient(333deg, rgba(255,255,255,1) 64%, ${Colors.light} 100%)`,
      }}
    >
      <Box
        display={"flex"}
        bgcolor={Colors.secondary}
        padding={1}
        flex={1}
        marginBottom={"10px"}
        justifyContent={"space-between"}
        fontWeight={"bold"}
      >
        <Box>Chris Young</Box>
        <Box>Carallel Application</Box>
        <Box>
          <LoginButton />
        </Box>
      </Box>
      <Box display={"flex"} padding={1}>
        <Box flex={1} flexDirection={"column"}>
          <ContentBox>
            <LoginButton />
          </ContentBox>
          <ContentBox>B</ContentBox>
        </Box>
        <ContentBox flex={3}>C</ContentBox>
      </Box>
    </Box>
  );
}
