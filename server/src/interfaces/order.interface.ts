import { Types } from "mongoose";

export interface IOrder {
    _id: Types.ObjectId;
    name: string;
}
