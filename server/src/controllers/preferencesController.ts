import { Request, Response } from "express";
import * as preferencesService from "../services/preferencesServices";

export async function setPreferences(req: Request, res: Response){
    const userId = Number(req.params.id);
    const preferences = req.body;

    await preferencesService.setPreferences(userId, preferences);

    res.sendStatus(200);
}

export async function definePreferences(req: Request, res: Response) {
    const userId = Number(req.params.id);
    const preferences = req.body;

    await preferencesService.definePreferences(userId, preferences);

    res.sendStatus(201);
}

export async function getPreferences(req: Request, res: Response){
    const userId = Number(req.params.id);

    const preferences = await preferencesService.getPreferences(userId);

    res.status(200).send(preferences);
}