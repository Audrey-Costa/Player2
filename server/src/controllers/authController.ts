import { Request, Response } from "express";
import { RegisterAuth } from "../types/userTypes";
import * as authServices from "../services/authServices";

export async function registerUser(req: Request, res: Response){
    const newUser: RegisterAuth = req.body;

    await authServices.registerUser(newUser);
    
    res.sendStatus(201);
}