import { Router } from "express";
import { getConfig } from "../controllers/configController";
import { validateToken } from "../middlewares/validateToken";

const configRouter = Router();

configRouter.get('/config/:id', validateToken, getConfig);

export default configRouter;