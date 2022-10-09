import { Preferences } from "@prisma/client";
import * as preferencesRepository from "../repositories/preferencesRepository";
import * as userRepository from "../repositories/userRepository";

export async function setPreferences(userId: number, preferences: Partial<Preferences>) {
    const user = await userRepository.findUserById(userId);

    if(!user){
        throw {type: "Not Found", message: "User not Found!"};
    }

    const update = await preferencesRepository.setPreferences(userId, preferences);

    if(!update){
        throw {type: "Method not allowed", message: "Update fail!"};
    }
}