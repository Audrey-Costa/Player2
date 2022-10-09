import { Router } from "express";
import { definePreferences, setPreferences } from "../controllers/preferencesController";
import { validateToken } from "../middlewares/validateToken";

const preferencesRouter = Router();

preferencesRouter.post("/preferences/:id", validateToken, definePreferences)
preferencesRouter.put("/preferences/:id", validateToken, setPreferences)

export default preferencesRouter;