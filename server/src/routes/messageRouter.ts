import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { sendMessage, receiveMessage } from "../controllers/messageController";

const messageRouter = Router();

messageRouter.post("/:id/message/send", validateToken, sendMessage);
messageRouter.get("/:id/message/receive/:fromId", validateToken, receiveMessage);

export default messageRouter;