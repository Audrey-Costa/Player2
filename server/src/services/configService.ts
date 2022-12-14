import { Users } from "@prisma/client";
import { prisma } from "../db/postgresDB";
import * as configRepository from "../repositories/configRepository"

export async function getConfig(userId: number) {
    const config = await configRepository.getConfig(userId);

    if(!config){
        throw {type: "Not Found", message: "Configuration data not Found!"};
    }

    return config;
}

export async function setConfig(userId: number, newConfig: Partial<Users>) {
    const config = await configRepository.getConfig(userId);

    if(!config){
        throw {type: "Not Found", message: "Configuration data not Found!"};
    }
    try {
        await configRepository.setConfig(userId, newConfig);
    } catch (error) {
        throw {type: "Method not allowed", message: "Update fail!"};
    }
}
