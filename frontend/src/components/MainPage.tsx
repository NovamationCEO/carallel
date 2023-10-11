import React from "react";
import { Box } from "@mui/material";
import { Colors } from "constants/Colors";
import { StatusBox } from "./StatusBox";
import { AdditionalBox } from "./DetailsBox";
import { ListBox } from "./ListBox";
import { Banner } from "./Banner";
import { Article } from "../../../backend/dist/article/ArticleType";
import { AddArticleSection } from "./AddArticleSection";

export function MainPage() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [selectedArticle, setSelectedArticle] = React.useState(
    undefined as Article
  );
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
        <Box flex={2} flexDirection={"column"}>
          <StatusBox signedIn={signedIn} />
          <AdditionalBox selectedArticle={selectedArticle} />
        </Box>
        <Box flex={5}>
          <ListBox
            setSelectedArticle={setSelectedArticle}
            signedIn={signedIn}
          />
        </Box>
      </Box>
      <AddArticleSection />
    </Box>
  );
}
