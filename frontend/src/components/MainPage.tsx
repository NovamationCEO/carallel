import React from "react";
import { Alert, AlertColor, Box, Snackbar } from "@mui/material";
import { Colors } from "constants/Colors";
import { StatusBox } from "./StatusBox";
import { DetailsBox } from "./DetailsBox.1";
import { ListBox } from "./ListBox";
import { Banner } from "./Banner";
import { AddArticleSection } from "./AddArticleSection";
import { CensoredArticle } from "types/Article";
import { UserHistory } from "./UserHistory";
import { useAuth0 } from "@auth0/auth0-react";

export function MainPage() {
  const [selectedArticle, setSelectedArticle] = React.useState(
    undefined as CensoredArticle
  );
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState(
    "success" as AlertColor
  );
  const backgroundGradient = `linear-gradient(333deg, rgba(255,255,255,1) 64%, ${Colors.light} 100%)`;
  const { isLoading, isAuthenticated } = useAuth0();

  function snack(text: string, severity: AlertColor) {
    setSnackbarText(text);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  }

  function closeSnack() {
    setSnackbarOpen(false);
    setTimeout(() => setSnackbarText(""), 70);
  }

  if (isLoading) return <Box>Loading...</Box>;

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
          <UserHistory selectedArticle={selectedArticle} />
        </Box>
        <Box flex={5}>
          <ListBox setSelectedArticle={setSelectedArticle} snack={snack} />
        </Box>
      </Box>
      {isAuthenticated && <AddArticleSection snack={snack} />}
    </Box>
  );
}
