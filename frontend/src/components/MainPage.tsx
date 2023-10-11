import React from "react";
import { Alert, AlertColor, Box, IconButton, Snackbar } from "@mui/material";
import { Colors } from "constants/Colors";
import { StatusBox } from "./StatusBox";
import { DetailsBox } from "./DetailsBox";
import { ListBox } from "./ListBox";
import { Banner } from "./Banner";
import { Article } from "../../../backend/dist/article/ArticleType";
import { AddArticleSection } from "./AddArticleSection";
import { AddCircle } from "@mui/icons-material";

export function MainPage() {
  const [signedIn, setSignedIn] = React.useState(false);
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
      <Banner signedIn={signedIn} setSignedIn={setSignedIn} />
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
          <StatusBox signedIn={signedIn} />
          <DetailsBox selectedArticle={selectedArticle} signedIn={signedIn} />
        </Box>
        <Box flex={5}>
          <ListBox
            setSelectedArticle={setSelectedArticle}
            signedIn={signedIn}
          />
        </Box>
      </Box>
      <AddArticleSection snack={snack} />
    </Box>
  );
}
