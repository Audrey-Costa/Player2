import { prisma } from "../db/postgresDB";


export async function getConfig(userId: number) {
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