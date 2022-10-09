import { prisma } from "../db/postgresDB";
import * as configRepository from "../repositories/configRepository"

export async function getConfig(userId: number) {
    const config = await configRepository.get(userId);

    if(!config){
        throw {type: "Not Found", message: "Configuration data not Found!"};
    }

    return config;
}