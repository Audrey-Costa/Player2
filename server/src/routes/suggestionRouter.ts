import { Router } from "express";
import getSuggestions from "../controllers/suggestionsController";
import { validateToken } from "../middlewares/validateToken";

const suggestionsRouter = Router();

suggestionsRouter.get("/suggestions/:id", validateToken, getSuggestions);

export default suggestionsRouter;