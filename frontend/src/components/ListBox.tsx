import { Colors } from "constants/Colors";
import { ContentBox } from "./ContentBox";
import React from "react";
import { Box } from "@mui/material";

export function ListBox(props: { signedIn?: boolean }) {
  const { signedIn = false } = props;

  return (
    <ContentBox>
      <Box
        bgcolor={Colors.light}
        flex={1}
        padding={1}
        border={`1px solid ${Colors.alt}`}
      >
        Article List?
      </Box>
    </ContentBox>
  );
}
