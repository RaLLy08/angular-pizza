import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { Role } from "../interfaces/user.interface";
import tokenKey from "../jwtSecret";

const authMiddleware = (roles: Role[]) =>
    (req: Request, res: Response, next: NextFunction) => {
        if (req.method === "OPTIONS") {
            next();
        }
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(403).json({message: "Пользователь не авторизован"});
        }

        try {
            const decodedToken = jwt.verify(token, tokenKey);

            const userRole = Number(Role[decodedToken.role]);

            const checkRole = roles.includes(userRole);

            if (checkRole) {
                next();
            } else {
                throw { name: "NotPermission" };
            }

        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(403).json({message: "Cрок токена истек", error});
            }
            if (error.name === "NotPermission") {
                return res.status(403).json({message: "Нет доступа", error});
            }
            return res.status(403).json({message: "Пользователь не авторизован", error});
        }
    };

export default authMiddleware;
