import { Router } from "express";
import { getProfile } from "../controllers/userController";
import { validateToken } from "../middlewares/validateToken";

const userRouter = Router();

userRouter.get("/profile", validateToken, getProfile);

export default userRouter;