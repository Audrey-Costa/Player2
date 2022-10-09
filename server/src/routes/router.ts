import { Router } from "express";
import authRouter from "./authRouter";
import preferencesRouter from "./preferencesRouter";
const router = Router();

router.use(authRouter, preferencesRouter);

export default router;