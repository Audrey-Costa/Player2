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

export async function definePreferences(userId: number, preferences: Partial<Preferences>) {
    const user = await userRepository.findUserById(userId);

    if(!user){
        throw {type: "Not Found", message: "User not Found!"};
    }

    const preference = await preferencesRepository.findUserPreference(userId);

    if(preference){
        throw {type: "Conflict", message: "Preference already saved"};
    }

    const success = await preferencesRepository.createPreference(userId, preferences);

    if(!success){
        throw {type: "Method not allowed", message: "Preferences failed to be save!"};
    }
}