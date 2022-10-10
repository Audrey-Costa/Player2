import { Router } from "express";
import { getProfile } from "../controllers/usersController";
import { validateToken } from "../middlewares/validateToken";

const userRouter = Router();

userRouter.get("/profile/:id", validateToken, getProfile);

export default userRouter;