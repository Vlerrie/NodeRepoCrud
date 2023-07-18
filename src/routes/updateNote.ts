import { Request, Response } from "express";

const db = require('../persistence');

module.exports = async (req: Request, res: Response) => {
    await db.updateNote(req.params.id, {
        title: req.body.title,
        body: req.body.body,
    });
    const note = await db.getNote(req.params.id);
    res.send(note);
};
