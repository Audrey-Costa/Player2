import { prisma } from "../db/postgresDB";
import { Users } from "@prisma/client";

export async function findUserById(id: number): Promise<Partial<Users>> {
    const user = await prisma.users.findFirst(
        {
            where: {
                id
            },
            select: {
                firstName: true,
                lastName: true,
                age: true,
                description: true
            }
        }
    );

    return user;
}