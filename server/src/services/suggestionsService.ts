import * as suggestionsRepository from "../repositories/suggestionsRepository";
import * as preferencesRepository from "../repositories/preferencesRepository";

export async function getSuggestions(userId: number, random: any) {
    if(random){
        const suggestions = await suggestionsRepository.getRandomSuggestions(userId);

        if(suggestions.length === 0){
            throw {type: "Not Found", message: "There are no users to suggest..."};
        }

        return suggestions;

    }else{
        const preferences = await preferencesRepository.findUserPreference(userId);
        const ageRange: [string, string] = <[string, string]>preferences.ageRange.split("-");
        const suggestions = await suggestionsRepository.getSuggestions(userId, preferences, ageRange);
        
        if(suggestions.length === 0){
            throw {type: "Not Found", message: "There are no users to suggest..."};
        }
        
        return suggestions;
    }
}