import { Box } from "@mui/material";
import React from "react";
import { Description } from "@mui/icons-material";
import { Colors } from "../constants/Colors";
import { CensoredArticle } from "types/Article";

export function ArticleItem(props: {
  article: CensoredArticle;
  setSelectedArticle: (a: CensoredArticle) => void;
}) {
  const { article, setSelectedArticle } = props;
  return (
    <Box
      display={"flex"}
      flex={1}
      flexDirection={"row"}
      alignItems={"center"}
      bgcolor={Colors.light}
      padding={1}
      borderRadius={1}
      sx={{
        "&:hover": {
          bgcolor: Colors.alt,
        },
        transition: "0.6s ease background",
      }}
      onClick={() => setSelectedArticle(article)}
    >
      <Box display={"flex"} marginRight={1}>
        <Description fontSize={"large"} />
      </Box>
      <Box flex={1} fontWeight={"bold"}>
        {article.title}
      </Box>
    </Box>
  );
}
