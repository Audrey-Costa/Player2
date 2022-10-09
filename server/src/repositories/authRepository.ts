import { prisma } from "../db/postgresDB";
import { Users } from "@prisma/client";

export async function findUser(email: string): Promise<Users>{
    const user = await prisma.users.findFirst({where: {email}});

    return user;
}

export async function registerUser(params:any) {
    
}