import * as suggestionsRepository from "../repositories/suggestionsRepository"

export async function getSuggestions(userId: number, random: any) {
    if(random){
        const suggestions = await suggestionsRepository.getRandomSuggestions(userId);

        if(suggestions.length){
            throw {type: "Not Found", message: "There are no users to suggest..."};
        }

        return suggestions;
        
    }else{
        const suggestions = await suggestionsRepository.getSuggestions(userId);
        
        if(suggestions.length){
            throw {type: "Not Found", message: "There are no users to suggest..."};
        }
        
        return suggestions;
    }
}