import { Preferences } from "@prisma/client";
import { prisma } from "../db/postgresDB"

export async function getRandomSuggestions(userId: number){
    const suggestions = await prisma.users.findMany(
        {
            where: {
                id: {
                    not: userId
                }
            },
            select:{
                firstName: true,
                lastName: true,
                age: true,
                description: true,
                preferences: {select: {focus: true}}
            }
        }
    );
        
    return suggestions;
}

export async function getSuggestions(userId: number, preferences: Preferences, ageRange: [string, string]){
    const suggestions = await prisma.users.findMany(
        {
            where: {
                id: {
                    not: userId
                },
                age: {
                    gte: Number(ageRange[0]), lte: Number(ageRange[1])
                },
                preferences: {
                    some: {
                        focus: {
                            equals: preferences.focus
                        }
                    }
                }
            },
            include: {
                preferences: {
                    select:{
                        focus: true
                    }, 
                    where:{
                        focus: {equals: preferences.focus}
                    }
                }
            }
        }
    );
    
    return suggestions;
}