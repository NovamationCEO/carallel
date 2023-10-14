import { Box } from "@mui/material";
import React from "react";
import { ContentBox } from "./ContentBox";
import { useAuth0 } from "@auth0/auth0-react";
import { CensoredArticle } from "types/Article";
import { UserHistoryItem } from "types/UserHistoryType";

export function UserHistory(props: { selectedArticle: CensoredArticle }) {
  const [userHistory, setUserHistory] = React.useState([] as UserHistoryItem[]);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    fetchIt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedArticle]);

  if (!isAuthenticated) return null;

  async function fetchIt() {
    if (!isAuthenticated) return null;
    const accessToken = await getAccessTokenSilently();
    const userId = user?.sub?.split("|").slice(-1)[0];

    if (!userId || !accessToken.length) return null;

    if (!accessToken.length) return;
    try {
      const response = await fetch(`/api/userHistory/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error();
      }
      setUserHistory(await response.json());
    } catch (error) {
      console.error(
        "Error fetching article.  User not authenticated or request malformed. ",
        error
      );
    }
  }

  if (!isAuthenticated) return null;

  userHistory.sort((a, b) => {
    return Number(a.date) - Number(b.date);
  });
  if (!userHistory.length) return null;

  return (
    <ContentBox>
      <Box textAlign={"center"}>Previously Visited Links</Box>
      <Box>
        {userHistory.map((item) => (
          <Box
            key={item.id}
            margin={1}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"x-small"}
            onClick={() => {
              window.open(item.link);
              fetchIt();
            }}
          >
            {item.title}
          </Box>
        ))}
      </Box>
    </ContentBox>
  );
}
