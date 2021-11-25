import { Types } from "mongoose";

export interface IAdditive {
    _id?: Types.ObjectId;
    title: string;
    price: number;
}
