// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from "express-validator";

export const ordersValidation = [body("").isString(), body("").isNumeric];
