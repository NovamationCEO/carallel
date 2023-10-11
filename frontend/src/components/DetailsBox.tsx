import React from "react";
import { ContentBox } from "./ContentBox";
import { Article } from "../../../backend/dist/article/ArticleType";
import { Box, Button } from "@mui/material";
import { Colors } from "constants/Colors";

export function AdditionalBox(props: { selectedArticle: Article }) {
  const { selectedArticle } = props;

  if (!selectedArticle) return null;
  return (
    <ContentBox>
      <Box
        bgcolor={Colors.alt}
        padding={1}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        {selectedArticle.title}
      </Box>
      <Box marginTop={2} marginBottom={2}>
        {selectedArticle.description}
      </Box>
      <Button variant="outlined" fullWidth>
        View
      </Button>
    </ContentBox>
  );
}
