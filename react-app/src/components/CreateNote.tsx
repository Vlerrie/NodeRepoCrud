import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Note from "../customTypes/NewNoteInterface";
import Notes from "../customTypes/NoteInterface";
import getNotesApi from "../externalApi/getNotesApi";
import { publish } from "../eventHandler";

const url = "http://localhost:8001/";

const CreateNote: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBody(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newNote: Note = {
      _id: null,
      title: title,
      body: body,
      created: null,
    };

    axios
      .post<Note>(url + "note", newNote)
      .then((response: AxiosResponse<Note>) => {
        console.log("Item created:", response.data);
        publish("reloadNotes");
        setTitle("");
        setBody("");
      })
      .catch((error) => {
        console.error("Error creating item:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Box sx={{ mt: 20, pr: 3 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            New Note
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
            <OutlinedInput
              id="noteTitle"
              label="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Body</InputLabel>
            <OutlinedInput
              id="noteTitle"
              label="Body"
              value={body}
              onChange={handleDescriptionChange}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{ m: 1 }}
          >
            Save Note
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default CreateNote;
