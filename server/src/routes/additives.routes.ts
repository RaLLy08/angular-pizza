import { Router } from "express";

import AdditivesController from "../controllers/additives.controller";
import { Role } from "../interfaces/user.interface";
import authMiddleware from "../middlewares/auth.middleware";

const { getAdditives, createAdditive } = new AdditivesController();

export default (router: Router) => {
    router.get("/additives", authMiddleware([Role.admin]), getAdditives); // admin
    router.post("/additives", authMiddleware([Role.admin]), createAdditive); // admin
};
