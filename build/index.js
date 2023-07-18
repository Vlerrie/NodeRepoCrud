"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Hello');
}));
app.get('/notes', getNotes);
app.post('/note', createNote);
app.put('/note/:id', updateNote);
app.delete('/note/:id', deleteNote);
db.run().then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
