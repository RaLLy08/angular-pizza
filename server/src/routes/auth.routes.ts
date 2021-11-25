import { Router } from "express";
import { check } from "express-validator";

import AuthController from "../controllers/auth.controller";

const { login, registration } = new AuthController();

export default (router: Router) => {
    router.post("/login", [
        check("phone", "Введите корректный номер").notEmpty().isString(),
        check("password", "Введите корректный пароль").notEmpty().isString(),
    ], login);
    router.post("/registration", [
        check("phone", "Введите номер").notEmpty(),
        check("password", "Введите пароль").notEmpty(),
        check("password", "Минимум 6 символов").isLength({ min: 6 }),
    ], registration);
};
