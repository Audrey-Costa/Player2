import { Request, Response } from "express";
import * as usersService from "../services/usersService";

export async function getProfile(req: Request, res: Response) {
    const userId = Number(req.params.id);

    const profile = await usersService.getProfile(userId);

    return profile;
}