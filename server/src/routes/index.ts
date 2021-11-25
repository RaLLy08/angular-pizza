import express from "express";

import additivesRoutes from "./additives.routes";
import authRoutes from "./auth.routes";
import countriesRoutes from "./countries.routes";
import ordersRoutes from "./orders.routes";
import placesPickupsRoutes from "./placesPickups.routes";
import productsRoutes from "./products.routes";
import promoRoutes from "./promo.routes";
import tokenRoutes from "./token.routes";

const routes = [
    authRoutes,
    countriesRoutes,
    ordersRoutes,
    productsRoutes,
    additivesRoutes,
    additivesRoutes,
    placesPickupsRoutes,
    tokenRoutes,
    promoRoutes,
];

export default () => {
    const router = express.Router();

    routes.forEach((route) => route(router));

    return router;
}