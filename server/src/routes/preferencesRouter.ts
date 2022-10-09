import { Router } from "express";
import { setPreferences } from "../controllers/preferencesController";
import { validateToken } from "../middlewares/validateToken";

const preferencesRouter = Router();

preferencesRouter.put("/preferences", validateToken, setPreferences)

export default preferencesRouter;