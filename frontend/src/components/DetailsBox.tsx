import React from "react";
import { ContentBox } from "./ContentBox";
import { Article } from "../../../backend/dist/article/ArticleType";
import { Box, Button } from "@mui/material";
import { Colors } from "constants/Colors";
import { LoginButton } from "./LoginButtonDefault";

export function DetailsBox(props: {
  selectedArticle: Article;
  signedIn: boolean;
}) {
  const { selectedArticle, signedIn } = props;
  const [warnVisible, setWarnVisible] = React.useState(false);

  function viewSite() {
    if (signedIn) {
      window.open(selectedArticle.link);
      return;
    }
    setWarnVisible(true);
  }

  React.useEffect(() => {
    setWarnVisible(false);
  }, [signedIn, selectedArticle]);

  if (!selectedArticle) return null;
  return (
    <>
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
        <Button variant="outlined" fullWidth onClick={viewSite}>
          View
        </Button>
      </ContentBox>
      {warnVisible && (
        <ContentBox>
          <Box textAlign={"center"} marginBottom={2}>
            To view{" "}
            <span style={{ fontWeight: "bold" }}>
              '{selectedArticle.title}'
            </span>{" "}
            and other excellent hand-picked articles, you need a free account.
            Please log in or sign up today!
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <LoginButton />
          </Box>
        </ContentBox>
      )}
    </>
  );
}
