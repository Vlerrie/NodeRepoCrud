import { Request, Response } from "express";

const db = require('../persistence');

module.exports = async (req :Request, res :Response) => {
    await db.deleteNote(req.params.id);
    res.sendStatus(200);
};