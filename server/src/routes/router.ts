import { Router } from "express";
import authRouter from "./authRouter";
import configRouter from "./configRouter";
import preferencesRouter from "./preferencesRouter";
const router = Router();

router.use(authRouter, preferencesRouter, configRouter);

export default router;