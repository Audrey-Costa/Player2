import * as userRepository from "../repositories/userRepository"

export async function getProfile(userId: number){
    return await userRepository.findUserById(userId);
}