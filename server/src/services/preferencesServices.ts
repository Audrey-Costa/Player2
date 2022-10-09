import * as preferencesRepository from "../repositories/preferencesRepository";
import * as userRepository from "../repositories/userRepository";

export async function setPreferences(userId: number, preferences: any) {
    const user = await userRepository.findUserById(userId);

    if(!user){
        throw {type: "Not Found", message: "User not Found!"};
    }

    await preferencesRepository.setPreferences(preferences);
}