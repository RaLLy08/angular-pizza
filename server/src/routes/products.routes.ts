import { Router } from "express";

import ProductsController from "../controllers/products.controller";
import { Role } from "../interfaces/user.interface";
import authMiddleware from "../middlewares/auth.middleware";

const { getProducts, getProduct, createProduct } = new ProductsController();

export default (router: Router) => {
    router.get("/products", getProducts);
    router.get("/products/:id", getProduct);
    router.post("/products", authMiddleware([Role.admin]), createProduct); // admin + check
};
