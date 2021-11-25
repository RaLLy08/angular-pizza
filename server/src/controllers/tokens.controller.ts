import { Request, Response } from "express";
import { decode } from "jsonwebtoken";

import { REFRESH_TOKEN_COOKIE_LIFETIME } from "./../consts/auth.consts";

import UserDto from "../dtos/user.dto";
import { generateAccessToken, generateRefreshToken } from "../helpers/auth.helpers";
import TokensService from "../services/tokens.service";

export default class TokensController {
   private tokensService = new TokensService();
   public refreshTokens = async (req: Request, res: Response) => {
        const { refreshToken } = req.cookies;

        const checkExist = await this.tokensService.findRefreshTokens(refreshToken);

        if (!checkExist) {
            return res.status(400).json({ message: "Токена не существует" });
        }

        const decodedToken = decode(refreshToken);
        const userDto = new UserDto(decodedToken);
        const accessToken = generateAccessToken(userDto);

        const newRefreshToken = generateRefreshToken(userDto);
        await this.tokensService.updateRefreshToken(newRefreshToken, decodedToken._id);

        res.cookie("refreshToken", newRefreshToken, {
            maxAge: REFRESH_TOKEN_COOKIE_LIFETIME,
            httpOnly: true,
        });

        res.status(200).json({ accessToken });
   }
}
