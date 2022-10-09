import { Router } from "express";
import { getConfig, setConfig } from "../controllers/configController";
import { validateToken } from "../middlewares/validateToken";

const configRouter = Router();

configRouter.get("/config/:id", validateToken, getConfig);
configRouter.put("/config/:id", validateToken, setConfig);

export default configRouter;