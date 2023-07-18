import { Request, Response } from "express";

const db = require('../persistence');
const {v4 : uuid} = require('uuid');

module.exports = async (req :Request, res :Response) => {
    const note = {
        _id: uuid(),
        title: req.body.title,
        body:  req.body.body,
        created: Date.now()
    };

    await db.storeNote(note);
    res.send(note);
};