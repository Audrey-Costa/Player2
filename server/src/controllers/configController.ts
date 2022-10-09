import { Request, Response } from "express";
import * as configService from "../services/configService";

export async function getConfig(req: Request, res: Response){
    const userId = Number(req.params.id);

    const config = await configService.getConfig(userId);
    
    res.status(200).send(config);
}

export async function setConfig(req: Request, res: Response){
    const userId = Number(req.params.id);

    await configService.setConfig(userId);
}