import { Router } from "express";
import authRouter from "./authRouter";
import configRouter from "./configRouter";
import preferencesRouter from "./preferencesRouter";
import suggestionsRouter from "./suggestionRouter";
import userRouter from "./userRouter";
import messageRouter from "./messageRouter"

const router = Router();

router.use(authRouter, preferencesRouter, configRouter, suggestionsRouter, userRouter, messageRouter);

export default router;