import { RegisterAuth } from "../types/userTypes";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";

export async function registerUser(newUser: RegisterAuth) {
    delete newUser.confirmPassword;

    const user = await authRepository.findUser(newUser.email);

    if(user){
        throw {type: "Conflict", message: "This email is already in use!"};
    }
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    await authRepository.registerUser(newUser);
}

export async function login(params:any) {
    
}