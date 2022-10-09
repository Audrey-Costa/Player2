import { Router } from "express";
import { registerUser } from "../controllers/authController";
import { loginSchema, registerSchema } from "../schemas/authSchemas";
import schemaValidation from "../middlewares/schemaValidationMiddleware";

const authRouter = Router();

authRouter.post("/register", schemaValidation(registerSchema), registerUser);
authRouter.post("/login", schemaValidation(loginSchema), );

export default authRouter;