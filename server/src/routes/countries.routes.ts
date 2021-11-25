import { Router } from "express";

import CountriesController from "../controllers/countries.controller";
import { Role } from "../interfaces/user.interface";
import authMiddleware from "../middlewares/auth.middleware";

const { getCountries } = new CountriesController();

export default (router: Router) => {
    router.get("/countries", authMiddleware([Role.user]), getCountries);
};
