import React from "react";
import { ContentBox } from "./ContentBox";
import {
  Article,
  CensoredArticle,
} from "../../../backend/dist/article/ArticleType";
import { Box, Button } from "@mui/material";
import { Colors } from "constants/Colors";
import { LoginButton } from "./LoginButtonDefault";
import { useAuth0 } from "@auth0/auth0-react";

export function DetailsBox(props: { selectedArticle: CensoredArticle }) {
  const { selectedArticle } = props;
  const [warnVisible, setWarnVisible] = React.useState(false);
  const { isAuthenticated } = useAuth0();
  let fullArticle: Article;

  async function fetchIt() {
    if (!selectedArticle || !selectedArticle.id.length) return;
    try {
      const response = await fetch(
        `http://localhost:3001/articles/${selectedArticle.id}`
      );
      const data = await response.json();
      fullArticle = data;
    } catch (error) {
      console.error(
        "Error fetching article.  User not authenticated or request malformed. ",
        error
      );
    }
  }

  React.useEffect(() => {
    fetchIt();
  }, [selectedArticle]);

  function viewSite() {
    if (isAuthenticated && fullArticle) {
      window.open(fullArticle.link);
      return;
    }
    setWarnVisible(true);
  }

  React.useEffect(() => {
    setWarnVisible(false);
  }, [isAuthenticated, selectedArticle]);

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
