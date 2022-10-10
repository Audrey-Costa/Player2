import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { sendMessage, getMessages } from "../controllers/messageController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { messageSchema } from "../schemas/messageSchema";

const messageRouter = Router();

messageRouter.post("/:id/message/send", validateToken, schemaValidation(messageSchema),sendMessage);
messageRouter.get("/:id/message/:friendId", validateToken, getMessages);

export default messageRouter;