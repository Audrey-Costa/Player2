import Joi from "joi";

export const messageSchema = Joi.object({
    senderId: Joi.number().integer().positive().required(),
    receiverId: Joi.number().integer().positive().required(),
    message: Joi.string().required()
})