import mongoDB from "../db/mongoDB";
import { TypeMessage } from "../types/messageType";

export async function sendMessage(message: TypeMessage) {
    message["sendedAt"] = Date.now(); 
    const success = await mongoDB.collection('messages').insertOne(message);
    
    return success;
}

export async function getMessages(userId: number, friendId: number){
    const messagesSended = await mongoDB.collection('messages').find({senderId: userId, receiverId: friendId}).toArray();
    const messagesReceiveded = await mongoDB.collection('messages').find({senderId: friendId, receiverId: userId}).toArray();
    
    return {messagesSended, messagesReceiveded};
}