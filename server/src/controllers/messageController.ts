import { Request, Response } from "express";
import { TypeMessage } from "../types/messageType";
import * as messageServices from "../services/messageServices";

export async function sendMessage(req: Request, res: Response) {
    const message: TypeMessage = req.body;

    await messageServices.sendMessage(message);

    res.status(201);
}

export async function receiveMessage(req: Request, res: Response) {
}