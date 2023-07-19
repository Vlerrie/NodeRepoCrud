import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText, Divider, Grid, Button, TextField, FormControl, InputLabel, OutlinedInput, } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

const url = 'http://localhost:8001/';
const listStyle = {
  width: '100%',
  bgcolor: 'background.paper',
};


interface Note {
  _id: string;
  title: string;
  body: string;
  created: number
}


const NoteItem: React.FC<{note: Note}> = ({ note }) => {
  const created_at = new Date(note.created);
  return (
    <div>
      <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary={note.title} secondary={created_at.getFullYear()+"-"+created_at.getMonth()+"-"+created_at.getDate()} style={{widows:'100%'}}/>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="body1" component="p" gutterBottom style={{widows:'100%'}}>
                 {note.body}
                </Typography>
              </Grid>
              
              <Grid item xs={1}>
              <svg data-testid="DeleteIcon"></svg>
                <Button variant="outlined" color="error">
                  <DeleteForeverIcon />
                </Button>
              </Grid>
            </Grid>
      </ListItem>

      <Divider />
    </div>
    
  );
};

const NoteList: React.FC = () => {
  const [dataArray, setDataArray] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get<Note[]>(url+'notes');
        setDataArray(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getNotes(); 
  }, []); 

  return (
    <div>
      <List>
        {dataArray.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))}
      </List>
    </div>
  );
};

export default function App() {
  return (
    <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Box sx={{ my: 4, pr:3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                  Create A new Note
                </Typography>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
                <OutlinedInput
                  id="noteTitle"
                  label="Title"
                />
              </FormControl>
              
              <FormControl fullWidth sx={{ m: 1  }}>
                <InputLabel htmlFor="outlined-adornment-amount">Body</InputLabel>
                <OutlinedInput
                  id="noteTitle"
                  label="Body"
                />
              </FormControl>
              <Button variant="contained" color="success" fullWidth sx={{m:1}}>
                Save Note
              </Button>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ my: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                This is a list of your notes
              </Typography>
              <NoteList />
            </Box>
          </Grid>
      </Grid>
    </Container>
  );
}