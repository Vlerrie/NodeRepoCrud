import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Note from "../customTypes/NewNoteInterface";
import Notes from "../customTypes/NoteInterface";
import getNotesApi from "../externalApi/getNotesApi";
import { publish } from "../eventHandler";

const url = "http://localhost:8001/";

interface DeleteProps {
  id: string;
}

const DeleteNote: React.FC<DeleteProps> = ({ id }) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .delete<Note>(url + "note/" + id)
      .then((response: AxiosResponse<Note>) => {
        publish("reloadNotes");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Button type="submit" variant="outlined" color="error">
          <DeleteForeverIcon />
        </Button>
      </form>
    </div>
  );
};

export default DeleteNote;
