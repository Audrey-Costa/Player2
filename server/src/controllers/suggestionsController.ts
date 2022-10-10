import { Request, Response } from "express";
import * as suggestionsService from "../services/suggestionsService";

export default async function getSuggestions(req: Request, res: Response){
    const random = req.query.random;
    const userId = Number(req.params.id);

    const suggestions = await suggestionsService.getSuggestions(userId, random);

    res.status(200).send(suggestions);
}