import { Router } from "express";
import { registerUser } from "../../controllers/authController";
import { registerSchema } from "../../schemas/authSchemas";
import schemaValidation from "../schemaValidationMiddleware";

const authRouter = Router();

authRouter.post("/register", schemaValidation(registerSchema), registerUser);

export default authRouter;