import { AlertColor, Box, Button, TextField } from "@mui/material";
import React from "react";
import { ContentBox } from "./ContentBox";
import { Colors } from "constants/Colors";

export function AddArticleSection(props: {
  snack: (text: string, severity?: AlertColor) => void;
}) {
  const { snack } = props;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");

  function clear() {
    setTitle("");
    setDescription("");
    setLink("");
  }

  async function submit() {
    const payload = { title, description, link };

    fetch("http://localhost:3001/articles/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
  );
}
