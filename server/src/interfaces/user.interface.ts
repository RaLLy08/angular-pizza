import { Types } from "mongoose";
export enum Role {user, admin}
export interface IUser {
    _id: Types.ObjectId;
    phone: string;
    password: string;
    role: Role;
    // accessToken: string;
    // refreshToken: string;
}
