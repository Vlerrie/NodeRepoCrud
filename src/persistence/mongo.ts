const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb://localhost:${process.env.DB_PORT}`;
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
const myDB = client.db(process.env.DB_NAME);
const myColl = myDB.collection(process.env.DB_COLLECTION);

async function run() {
    await client.connect();
    await client.db("crudRepo").command({ ping: 1 });
}

async function close() {
  await client.close();
}

async function storeNote(note: Object) {
    myColl.insertOne(note);
}

async function updateNote(id: string, note: Object) {
  myColl.updateOne(
    {_id:id}, 
    {$set: note}
  );
}

async function getNotes() {
    const notes = await myColl.find({}).toArray();
    return notes;
}

async function getNote(id: string) {
  const note = await myColl.find({_id:id}).toArray();
  return note;
}

async function deleteNote(id :string) {
  const result = await myColl.deleteOne({_id:id});
}

module.exports = {
    run,
    close,
    storeNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
};