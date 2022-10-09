import { Request, Response } from "express";
import { LoginAuth, RegisterAuth } from "../types/userTypes";
import * as authServices from "../services/authServices";

export async function registerUser(req: Request, res: Response){
    const newUser: RegisterAuth = req.body;

    await authServices.registerUser(newUser);
    
    res.sendStatus(201);
}

export async function login(req: Request, res: Response){
    const user: LoginAuth = req.body;

    const token = await authServices.login(user);
    res.status(200).send(token);
}