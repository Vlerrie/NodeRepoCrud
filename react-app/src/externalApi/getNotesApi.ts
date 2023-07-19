import Note from '../customTypes/NoteInterface';
import axios from 'axios';

const url = 'http://localhost:8001/';

async function getNotesApi(){
    const response = await axios.get<Note[]>(url+'notes');

    return response.data;
} 

export default getNotesApi;