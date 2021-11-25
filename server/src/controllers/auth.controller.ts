import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { REFRESH_TOKEN_COOKIE_LIFETIME } from "../consts/auth.consts";
import UserDto from "../dtos/user.dto";
import { generateAccessToken, generateRefreshToken } from "../helpers/auth.helpers";
import AuthService from "../services/auth.service";
import TokensService from "../services/tokens.service";

export default class AuthController {
   private tokensService = new TokensService();
   private authService = new AuthService();
   public registration = async (req: Request, res: Response) => {
      try {
         const errors = validationResult(req);
         const { phone, password } = req.body;

         if (!errors.isEmpty()) {
            return res.status(400).json({message: "Ошибка регистрации", errors});
         }

         const user = await this.authService.findByPhone(phone);

         if (user) {
            return res.status(400).json({message: "Пользователь с таким номером уже существует"});
         }

         const encryptedPassword = await bcrypt.hash(password, 10);
         const newUser = await this.authService.createUser(phone, encryptedPassword);

         res.status(201).json(newUser);
      } catch (err) {
         console.log(err);
      }
   }
   public login = async (req: Request, res: Response) => {
      try {
         const { phone, password } = req.body;
         const errors = validationResult(req);

         if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Ошибка регистрации", errors });
         }

         const user = await this.authService.findByPhone(phone);

         if (!user) {
            res.status(400).json({message: "Пользователя с таким номером не существует"});
            return;
         }

         const checkPassword: boolean = await bcrypt.compare(password, user.password);

         if (!checkPassword) {
            res.status(400).json({message: "Неверный логин или пароль"});
            return;
         }
         const userDto = new UserDto(user);

         const accessToken = generateAccessToken(userDto);

         const userRefreshTokens = await this.tokensService.getUserTokens(user._id);
         const refreshToken = generateRefreshToken(userDto);

         if (!userRefreshTokens.length) {
            await this.tokensService.createToken(refreshToken, user._id);
         } else {
            await this.tokensService.updateRefreshToken(refreshToken, user._id);
         }

         res.cookie("refreshToken", refreshToken, {
            maxAge: REFRESH_TOKEN_COOKIE_LIFETIME,
            httpOnly: true,
         });

         res.status(200).json({accessToken, user: userDto});
      } catch (err) {
         console.log(err);
      }

   }
}
