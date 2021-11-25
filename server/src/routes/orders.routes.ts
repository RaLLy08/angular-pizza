import { Router } from "express";

import OrdersController from "../controllers/orders.controller";
import { Role } from "../interfaces/user.interface";
import authMiddleware from "../middlewares/auth.middleware";

const { getUserOrders, createOrder } = new OrdersController();

export default (router: Router) => {
    router.get("/orders/user/:id", authMiddleware([Role.user]), getUserOrders);
    router.post("/orders", authMiddleware([Role.user]), createOrder);
};
