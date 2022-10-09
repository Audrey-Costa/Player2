import { Preferences } from "@prisma/client";
import { prisma } from "../db/postgresDB";

export async function findUserPreference(userId: number): Promise<Preferences>{
    return await prisma.preferences.findFirst({where: {userId}});
}

export async function createPreference(userId: number, preferences: Partial<Preferences>): Promise<Preferences>{
    return await prisma.preferences.create({data: {userId, ageRange: preferences.ageRange, focus: preferences.focus}});
}

export async function setPreferences(id: number, preferences: Partial<Preferences>) {
    return await prisma.preferences.update({where: {id}, data: preferences});
}

export async function getPreferences(userId:number): Promise<Preferences>{
    return  prisma.preferences.findFirst({where: {userId}});
}