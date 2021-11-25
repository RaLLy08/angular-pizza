import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import tokenKey from "../jwtSecret";

const refreshTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken } = req.cookies;

    try {
        jwt.verify(refreshToken, tokenKey);

        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(403).json({message: "Cрок токена истек", error});
        }
        return res.status(403).json({message: "Пользователь не авторизован", error});
    }
};

export default refreshTokenMiddleware;
