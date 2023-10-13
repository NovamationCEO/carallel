import { AlertColor, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import { ContentBox } from "./ContentBox";
import { Colors } from "constants/Colors";
import { AddCircle } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";

export function AddArticleSection(props: {
  snack: (text: string, severity?: AlertColor) => void;
}) {
  const { snack } = props;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");
  const [showSection, setShowSection] = React.useState(false);

  const { getAccessTokenSilently } = useAuth0();

  function clear() {
    setTitle("");
    setDescription("");
    setLink("");
  }

  async function submit() {
    const payload = { title, description, link };
    const token = getAccessTokenSilently();

    fetch(`${process.env.BACKEND}/articles/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        snack("Article Added!", "success");
        clear();
      })
      .catch((error) => {
        snack(error, "error");
      });
  }

  return (
    <>
      <Box marginTop={-2} marginLeft={1}>
        <IconButton
          color={showSection ? "primary" : "default"}
          onClick={() => setShowSection((prev) => !prev)}
        >
          <AddCircle />
        </IconButton>
      </Box>
      {showSection && (
        <ContentBox>
          <Box
            bgcolor={Colors.light}
            flex={1}
            padding={1}
            marginBottom={2}
            fontWeight={"bold"}
          >
            Add New Article
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <TextField
              variant={"filled"}
              label={"title"}
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
            />
            <TextField
              variant={"filled"}
              label={"description"}
              value={description}
              multiline
              onChange={(evt) => setDescription(evt.target.value)}
            />
            <TextField
              variant={"filled"}
              label={"link"}
              value={link}
              onChange={(evt) => setLink(evt.target.value)}
            />
            <Box display={"flex"} flexDirection={"row-reverse"}>
              <Button
                variant={"contained"}
                disabled={!title.length || !description.length || !link.length}
                onClick={submit}
              >
                Add
              </Button>
            </Box>
          </Box>
        </ContentBox>
      )}
    </>
  );
}
