import { Request, Response } from "express";
import * as preferencesService from "../services/preferencesServices";

export async function setPreferences(req: Request, res: Response){
    const userId = Number(req.params.id);
    const preferences = req.body;

    await preferencesService.setPreferences(userId, preferences);

    res.sendStatus(200);
}