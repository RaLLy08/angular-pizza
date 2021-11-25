import UserModel from "../models/user.model";

import { IUser } from "./../interfaces/user.interface";

export default class AuthService {
    private User = UserModel;
    public async findByPhone(phone: string): Promise<IUser> {

        return await this.User.findOne({ phone });
    }
    public async createUser(phone: string, password: string): Promise<void> {
        const user = new this.User({ phone, password });
        await user.save();
    }
}
