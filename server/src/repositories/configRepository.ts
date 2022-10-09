import { Users } from "@prisma/client";
import { prisma } from "../db/postgresDB";


export async function getConfig(userId: number,) {
    const config = await prisma.users.findFirst(
        {where: {id: userId},
        select: {
            firstName: true,
            lastName: true,
            description: true,
            age: true,
            email: true,
            password: true
        }})

        return config;
}

export async function setConfig(userId: number, newConfig: Partial<Users>) {
    return await prisma.users.update({where: {id: userId}, data: newConfig});
}