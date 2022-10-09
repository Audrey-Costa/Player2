import { Request, Response } from "express";
import * as preferencesServices from "../services/preferencesServices";

export async function setPreferences(req: Request, res: Response){
    const userId = Number(req.params.id);
    const preferences = req.body;

    await preferencesServices.setPreferences(userId, preferences);

    res.sendStatus(200);
}

export async function definePreferences(req: Request, res: Response) {
    const userId = Number(req.params.id);
    const preferences = req.body;

    await preferencesServices.definePreferences(userId, preferences);

    res.sendStatus(201);
}

export async function getPreferences(req: Request, res: Response){
    const userId = Number(req.params.id);

    const preferences = await preferencesServices.getPreferences(userId);

    res.status(200).send(preferences);
}