import Joi from "joi";
import { LoginAuth, RegisterAuth } from "../types/userTypes";

export const registerSchema = Joi.object<RegisterAuth>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().greater(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().equal(Joi.ref('password')).required()
})

export const loginSchema = Joi.object<LoginAuth>({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})