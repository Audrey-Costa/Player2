import { Preferences } from "@prisma/client";
import { prisma } from "../db/postgresDB";

export async function setPreferences(id: number, preferences: Partial<Preferences>) {
    return await prisma.preferences.update({where: {id}, data: preferences});
}