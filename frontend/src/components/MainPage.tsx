import React from "react";
import { LoginButton } from "./LoginButtonDefault";
import { Box } from "@mui/material";

export function MainPage() {
  return (
    <Box
      flex={1}
      height={"calc(100vh - 20px"}
      width={"100vw"}
      position={"relative"}
      paddingLeft={"10px"}
      paddingRight={"10px"}
      paddingBottom={"10px"}
      sx={{
        background:
          "linear-gradient(333deg, rgba(255,255,255,1) 64%, rgba(221,249,255,1) 100%)",
      }}
    >
      <Box
        display={"flex"}
        bgcolor={"red"}
        padding={1}
        flex={1}
        marginBottom={"10px"}
      >
        Hi
      </Box>
      <Box display={"flex"} flexDirection={"row"}>
        <Box flex={1} flexDirection={"column"} padding={2}>
          <Box padding={1} bgcolor={"pink"} borderRadius={"10px"}>
            <LoginButton />
          </Box>
          <Box padding={1}>B</Box>
        </Box>
        <Box flex={2} padding={2}>
          C
        </Box>
      </Box>
    </Box>
  );
}
