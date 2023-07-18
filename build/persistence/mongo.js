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
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb://localhost:${process.env.DB_PORT}`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const myDB = client.db(process.env.DB_NAME);
const myColl = myDB.collection(process.env.DB_COLLECTION);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        yield client.db("crudRepo").command({ ping: 1 });
    });
}
function close() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.close();
    });
}
function storeNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        myColl.insertOne(note);
    });
}
function updateNote(id, note) {
    return __awaiter(this, void 0, void 0, function* () {
        myColl.updateOne({ _id: id }, { $set: note });
    });
}
function getNotes() {
    return __awaiter(this, void 0, void 0, function* () {
        const notes = yield myColl.find({}).toArray();
        return notes;
    });
}
function getNote(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const note = yield myColl.find({ _id: id }).toArray();
        return note;
    });
}
function deleteNote(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield myColl.deleteOne({ _id: id });
    });
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
