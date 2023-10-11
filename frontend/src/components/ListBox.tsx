import { Colors } from "constants/Colors";
import { ContentBox } from "./ContentBox";
import React from "react";
import { Box } from "@mui/material";
import { Article } from "../../../backend/dist/article/ArticleType";
import { ArticleItem } from "./ArticleItem";

export function ListBox(props: {
  setSelectedArticle: (a: Article) => void;
  signedIn?: boolean;
}) {
  const { setSelectedArticle, signedIn = false } = props;

  const [articles, setArticles] = React.useState([] as Article[]);

  React.useEffect(() => {
    async function fetchIt() {
      try {
        const response = await fetch("http://localhost:3001/articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
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
