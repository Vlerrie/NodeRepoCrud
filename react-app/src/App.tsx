import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import NoteList from './components/ListNotes';
import CreateNote from './components/CreateNote';

export default function App() {
  return (
    <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CreateNote />
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ my: 4, overflow:'auto', height: 700}}>
              <Typography variant="h4" component="h2" gutterBottom>
                Notes
              </Typography>
              <NoteList></NoteList>
            </Box>
          </Grid>
      </Grid>
    </Container>
  );
}