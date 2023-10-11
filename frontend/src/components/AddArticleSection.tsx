import { Box, TextField } from "@mui/material";
import React from "react";
import { ContentBox } from "./ContentBox";
import { Colors } from "constants/Colors";

export function AddArticleSection() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");

  return (
    <ContentBox>
      <Box
        bgcolor={Colors.alt}
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
      </Box>
    </ContentBox>
  );
}
