import { Request, Response } from "express";

const db = require('../persistence');

module.exports = async (req :Request, res :Response) => {
    const notes = await db.getNotes();
    res.send(notes);
};