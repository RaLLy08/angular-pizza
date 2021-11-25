import { Types } from "mongoose";

import { IToken } from "../interfaces/token.interface";
import TokenModel from "../models/token.model";

export default class TokenService {
    private Token = TokenModel;
    public async getUserTokens(id: Types.ObjectId): Promise<IToken[]> {
        const tokens = await this.Token.find({user: id});

        return tokens;
    }
    public async findRefreshTokens(refreshToken: string): Promise<IToken> {
        return await this.Token.findOne({ refreshToken });
    }
    public async createToken(token: string, userId: Types.ObjectId): Promise<void> {
        await this.Token.create({
            refreshToken: token,
            user: userId,
        });
    }
    public updateRefreshToken = async (token: string, userId: Types.ObjectId): Promise<void> => {
        await this.Token.updateOne({ userId }, { refreshToken: token });
    }
}
