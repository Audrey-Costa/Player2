import { Router } from "express";
import authRouter from "./authRouter";
import configRouter from "./configRouter";
import preferencesRouter from "./preferencesRouter";
import suggestionsRouter from "./suggestionRouter";
import userRouter from "./userRouter";
const router = Router();

router.use(authRouter, preferencesRouter, configRouter, suggestionsRouter, userRouter);

export default router;