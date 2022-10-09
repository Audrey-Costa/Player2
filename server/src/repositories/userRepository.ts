import { prisma } from "../db/postgresDB";
import { Users } from "@prisma/client";

export async function findUserById(id: number): Promise<Users> {
    const user = await prisma.users.findFirst({where: {id}});

    return user;
}