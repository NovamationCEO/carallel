import React from "react";
import { Alert, AlertColor, Box, Snackbar } from "@mui/material";
import { Colors } from "constants/Colors";
import { StatusBox } from "./StatusBox";
import { DetailsBox } from "./DetailsBox";
import { ListBox } from "./ListBox";
import { Banner } from "./Banner";
import { Article } from "../../../backend/dist/article/ArticleType";
import { AddArticleSection } from "./AddArticleSection";

export function MainPage() {
  const [selectedArticle, setSelectedArticle] = React.useState(
    undefined as Article
  );
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState(
    "success" as AlertColor
  );
  const backgroundGradient = `linear-gradient(333deg, rgba(255,255,255,1) 64%, ${Colors.light} 100%)`;

  function snack(text: string, severity: AlertColor) {
    setSnackbarText(text);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  }

  function closeSnack() {
    setSnackbarOpen(false);
    setTimeout(() => setSnackbarText(""), 70);
  }

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
      <Banner />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={closeSnack}
        sx={{ boxShadow: `10px 10px 36px -8px ${Colors.midnight}` }}
      >
        <Box display={"flex"}>
          <Alert severity={snackbarSeverity} onClose={closeSnack}>
            {snackbarText}
          </Alert>
        </Box>
      </Snackbar>
      <Box display={"flex"} padding={1}>
        <Box flex={2} flexDirection={"column"}>
          <StatusBox />
          <DetailsBox selectedArticle={selectedArticle} />
        </Box>
        <Box flex={5}>
          <ListBox setSelectedArticle={setSelectedArticle} snack={snack} />
        </Box>
      </Box>
      <AddArticleSection snack={snack} />
    </Box>
  );
}
