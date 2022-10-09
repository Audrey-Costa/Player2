import { Router } from "express";
import authRouter from "./authRouter";
import configRouter from "./configRouter";
import preferencesRouter from "./preferencesRouter";
import suggestionsRouter from "./suggestionRouter";
const router = Router();

router.use(authRouter, preferencesRouter, configRouter, suggestionsRouter);

export default router;