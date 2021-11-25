import { sign } from "jsonwebtoken";

import { ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_LIFETIME } from "../consts/auth.consts";
import UserDto from "../dtos/user.dto";
import secretKey from "../jwtSecret";

export const generateAccessToken = (user: UserDto) => {
    const payload = {
       ...user,
       type: "access",
    };

    return sign(payload, secretKey, {expiresIn: ACCESS_TOKEN_LIFETIME} );
};

export const generateRefreshToken = (user: UserDto) => {
    const payload = {
       ...user,
       type: "refresh",
    };

    return sign(payload, secretKey, {expiresIn: REFRESH_TOKEN_LIFETIME} );
};
