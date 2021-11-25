import { Types } from "mongoose";

import { IUser, Role } from "./../interfaces/user.interface";

export default class UserDto {
    public id: Types.ObjectId;
    public phone: string;
    public role: Role;

    constructor(user: IUser) {
        this.id = user._id;
        this.phone = user.phone;
        this.role = user.role;
    }
}
