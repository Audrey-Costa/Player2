import { TypeMessage } from "../types/messageType";
import * as messageRepository from "../repositories/messageRepository";

export async function sendMessage(message: TypeMessage){
    const success = await messageRepository.sendMessage(message);

    if(!success){
        throw {type: "Method not allowed", message: "Message failed to be save!"};
    }
}

export async function getMessages(userId: number, friendId: number){
    
}