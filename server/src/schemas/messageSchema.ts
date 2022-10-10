import Joi from "joi";
import { TypeMessage } from "../types/messageType";

export const messageSchema = Joi.object<TypeMessage>({
    senderId: Joi.number().integer().positive().required(),
    receiverId: Joi.number().integer().positive().required(),
    message: Joi.string().required()
});