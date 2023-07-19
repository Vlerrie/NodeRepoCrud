import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Note from "../customTypes/NoteInterface";
import getNotesApi from "../externalApi/getNotesApi";
import DeleteNote from "./DeleteNote";
import { subscribe } from "../eventHandler";

const NoteItem: React.FC<{ note: Note }> = ({ note }) => {
  const created_at = new Date(note.created);
  return (
    <div>
      <ListItem>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListItemText
              primary={note.title}
              secondary={
                created_at.getFullYear() +
                "-" +
                created_at.getMonth() +
                "-" +
                created_at.getDate()
              }
              style={{ widows: "100%" }}
            />
            <DeleteNote id={note._id} />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              style={{ widows: "100%" }}
            >
              {note.body}
            </Typography>
          </Grid>
        </Grid>
      </ListItem>

      <Divider />
    </div>
  );
};

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await getNotesApi();
        setNotes(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getNotes();
    subscribe("reloadNotes", () => {
      getNotes();
    });
  }, []);

  return (
    <div>
      <List>
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))}
      </List>
    </div>
  );
};

export default NoteList;
