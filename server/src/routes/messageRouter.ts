import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { sendMessage } from "../controllers/messageController";

const messageRouter = Router();

messageRouter.post("/:id/message/send", validateToken, sendMessage);

export default messageRouter;