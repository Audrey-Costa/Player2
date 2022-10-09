import { prisma } from "../db/postgresDB";
import { Users } from "@prisma/client";
import { RegisterAuth } from "../types/userTypes";

export async function findUser(email: string): Promise<Users>{
    const user = await prisma.users.findFirst({where: {email}});

    return user;
}

export async function registerUser(newUser: RegisterAuth) {
    await prisma.users.create({data: newUser});
}