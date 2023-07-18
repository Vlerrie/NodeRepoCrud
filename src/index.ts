import { Request, Response } from "express";

require('dotenv').config();
const PORT = process.env.PORT || 8001;
const express = require('express');
const app = express();
const db = require('./persistence/index.js');
const getNotes = require('./routes/getNotes');
const createNote = require('./routes/createNote');
const updateNote = require('./routes/updateNote');
const deleteNote = require('./routes/deleteNote');

app.use(express.json());

app.get('/', async (req:Request, res:Response) => {
    res.send('Hello');
});
app.get('/notes', getNotes);
app.post('/note', createNote);
app.put('/note/:id', updateNote);
app.delete('/note/:id', deleteNote);

db.run().then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}).catch((err:Error) => {
    console.error(err);
    process.exit(1);
});
