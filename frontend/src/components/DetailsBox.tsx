import React from "react";
import { ContentBox } from "./ContentBox";
import { Box, Button } from "@mui/material";
import { Colors } from "constants/Colors";
import { LoginButton } from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Article, CensoredArticle } from "types/Article";

export function DetailsBox(props: { selectedArticle: CensoredArticle }) {
  const { selectedArticle } = props;
  const [warnVisible, setWarnVisible] = React.useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = React.useState("");
  let fullArticle: Article;

  async function loadUser() {
    const token = await getAccessTokenSilently();
    setAccessToken(token);
  }

  async function fetchIt() {
    if (!selectedArticle || !selectedArticle.id.length) return;
    if (!accessToken.length) return;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/articles/${selectedArticle.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }
      fullArticle = await response.json();
    } catch (error) {
      console.error(
        "Error fetching article.  User not authenticated or request malformed. ",
        error
      );
    }
  }

  React.useEffect(() => {
    if (!isAuthenticated) return;
    loadUser();
    fetchIt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedArticle]);

  async function viewSite() {
    if (isAuthenticated && fullArticle) {
      if (!accessToken.length) return;

      const userId = user?.sub?.split("|").slice(-1)[0];

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/userHistory/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              userId: userId,
              date: Date.now(),
              articleId: fullArticle.id,
              link: fullArticle.link,
              title: fullArticle.title,
            }),
          }
        );

        if (!response.ok) {
          throw new Error();
        }
      } catch (error) {
        console.error(
          "Error fetching article.  User not authenticated or request malformed. ",
          error
        );
      }

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
