import { Preferences } from "@prisma/client";
import * as preferencesRepository from "../repositories/preferencesRepository";
import * as userRepository from "../repositories/userRepository";

export async function setPreferences(userId: number, preferences: Partial<Preferences>) {
    const user = await userRepository.findUserById(userId);

    if(!user){
        throw {type: "Not Found", message: "User not Found!"};
    }

    try {
        const update = await preferencesRepository.setPreferences(userId, preferences);
    } catch (error) {
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

export async function getPreferences(userId: number) {
    const preferences = await preferencesRepository.getPreferences(userId);

    if(!preferences){
        throw {type: "Not Found", message: "Preferences not Found!"};
    }

    return preferences;
}