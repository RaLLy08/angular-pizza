import { Types } from "mongoose";

export interface IProduct {
    _id: Types.ObjectId;
    title: string;
    ingredients: [
      {
        title: string;
        count: string;
      }
    ];
    description: string;
    additives: [
      {
        _id: Types.ObjectId,
      }
    ];
    size: ["small", "medium", "large"];
    dough: ["thin", "traditional"];
    price: number;
}

export interface IProductShort {
    _id?: Types.ObjectId;
    title: string;
    price: number;
    description: string;
}
