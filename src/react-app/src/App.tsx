import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText, Divider, Grid, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {getNotes} from './repositories/notesRepo';

const listStyle = {
  width: '100%',
  bgcolor: 'background.paper',
};

function NoteList() {
  const notes = getNotes();
  console.log(notes);

  return (
    <List sx={listStyle} component="nav" aria-label="mailbox folders">
          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Note thingy" secondary="2023-01-01" style={{widows:'100%'}}/>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h6" component="h6" gutterBottom style={{widows:'100%'}}>
                  This is a list of your notes and a note can get pretty long too.
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
        </List>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          This is a list of your notes
        </Typography>
        <NoteList />
      </Box>
    </Container>
  );
}