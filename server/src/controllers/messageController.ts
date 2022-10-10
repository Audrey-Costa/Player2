import { Request, Response } from "express";
import mongoDB from "../db/mongoDB";
import { ObjectId } from "mongodb";

export async function sendMessage(req: Request, res: Response) {
    const message = req.body;
}