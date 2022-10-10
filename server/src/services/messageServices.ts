import { TypeMessage } from "../types/messageType";
import * as messageRepository from "../repositories/messageRepository";

export async function sendMessage(message: TypeMessage){
    const {acknowledged} = await messageRepository.sendMessage(message);

    if(!acknowledged){
        throw {type: "Method not allowed", message: "Message failed to be save!"};
    }
}

export async function getMessages(userId: number, friendId: number){
    const messages = await messageRepository.getMessages(userId, friendId);

    const messagesGet = messages.messagesSended.concat(messages.messagesReceiveded)

    return messagesGet;
}