import { Router } from "express";
import { cookie } from "express-validator";

import TokensController from "../controllers/tokens.controller";
import refreshTokenMiddleware from "../middlewares/refreshToken.middleware";

const { refreshTokens } = new TokensController();

export default (router: Router) => {
    router.get("/refreshTokens", [
        cookie("refreshToken", "refresh token is not defined"),
    ], refreshTokenMiddleware , refreshTokens);
};
