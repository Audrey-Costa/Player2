import mongoDB from "../db/mongoDB";
import { TypeMessage } from "../types/messageType";

export async function sendMessage(message: TypeMessage) {
    const success = await mongoDB.collection('messages').insertOne(message);
    
    return success;
}

export async function getMessages(userId: number, friendId: number){
}