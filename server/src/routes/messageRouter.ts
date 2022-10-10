import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { sendMessage, getMessages } from "../controllers/messageController";

const messageRouter = Router();

messageRouter.post("/:id/message/send", validateToken, sendMessage);
messageRouter.get("/:id/message/:friendId", validateToken, getMessages);

export default messageRouter;