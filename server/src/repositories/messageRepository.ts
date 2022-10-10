import mongoDB from "../db/mongoDB";
import { TypeMessage } from "../types/messageType";

export async function sendMessage(message: TypeMessage) {
    return await mongoDB.collection('messages').insertOne(message);
}