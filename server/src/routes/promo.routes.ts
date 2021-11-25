import { Router } from "express";

import PromoController from "../controllers/promo.controller";
import { Role } from "../interfaces/user.interface";
import authMiddleware from "../middlewares/auth.middleware";

const { getAllPromo, getPromoByCode, createPromo, deletePromo } = new PromoController();

export default (router: Router) => {
    router.get("/promo", authMiddleware([Role.admin]), getAllPromo);
    router.get("/promo/code/:code", authMiddleware([Role.admin, Role.user]), getPromoByCode);
    router.delete("/deletePromo/:id", authMiddleware([Role.admin]), deletePromo);
    router.post("/promo", authMiddleware([Role.admin]), createPromo); // admin + check
};
