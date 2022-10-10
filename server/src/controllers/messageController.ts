import { Request, Response } from "express";
import { TypeMessage } from "../types/messageType";
import * as messageServices from "../services/messageServices";

export async function sendMessage(req: Request, res: Response){
    const message: TypeMessage = req.body;

    await messageServices.sendMessage(message);

    res.sendStatus(201);
}

export async function getMessages(req: Request, res: Response){
    const userId = Number(req.params.id);
    const friendId = Number(req.params.friendId);

    const messages = await messageServices.getMessages(userId, friendId);

    res.status(200).send(messages);
}