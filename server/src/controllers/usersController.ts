import { Request, Response } from "express";
import * as usersService from "../services/usersService";

export async function getProfile(req: Request, res: Response) {
    const userId = Number(req.params.userId);

    const profile = await usersService.getProfile(userId);

    res.status(200).send(profile);
}