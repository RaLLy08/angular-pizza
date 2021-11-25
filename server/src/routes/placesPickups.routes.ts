import { Router } from "express";

import PlacesPickupsController from "../controllers/placesPickups.controller";
import { Role } from "../interfaces/user.interface";
import authMiddleware from "../middlewares/auth.middleware";

const { getPlacesPickups, createPlacesPickup } = new PlacesPickupsController();

export default (router: Router) => {
    router.get("/placesPickups", authMiddleware([Role.admin]), getPlacesPickups); // admin
    router.post("/placesPickups", authMiddleware([Role.admin]), createPlacesPickup); // admin
};
