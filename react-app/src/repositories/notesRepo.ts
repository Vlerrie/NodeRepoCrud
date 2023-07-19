import axios from 'axios';

const url = 'http://localhost:8001/';

async function getNotes() {
    axios.get(url+'notes').then(res => {
        console.log(res);
    });
}

export {
    getNotes
}