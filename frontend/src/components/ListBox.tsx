import { Colors } from "constants/Colors";
import { ContentBox } from "./ContentBox";
import React from "react";
import { AlertColor, Box } from "@mui/material";
import { ArticleItem } from "./ArticleItem";
import { CensoredArticle } from "types/Article";

export function ListBox(props: {
  setSelectedArticle: (a: CensoredArticle) => void;
  snack: (text: string, severity: AlertColor) => void;
}) {
  const { setSelectedArticle, snack } = props;

  const [articles, setArticles] = React.useState([] as CensoredArticle[]);

  React.useEffect(() => {
    async function fetchIt() {
      try {
        const response = await fetch("http://localhost:3001/articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        snack("Error fetching articles. " + error, "error");
      }
    }

    fetchIt();
  }, []);

  return (
    <ContentBox>
      <Box
        bgcolor={Colors.light}
        flex={1}
        padding={1}
        border={`1px solid ${Colors.alt}`}
      >
        {articles.map((article) => (
          <ArticleItem
            article={article}
            setSelectedArticle={setSelectedArticle}
            key={article.id}
          />
        ))}
      </Box>
    </ContentBox>
  );
}
