import { Types } from "mongoose";

import ProductModel from "../models/product.model";
import { IProduct, IProductShort } from "./../interfaces/product.interface";

export default class ProductsService {
    private Product = ProductModel;
    public async getProducts(): Promise<IProductShort[]> {
        return await this.Product.aggregate([
            {
                $project:
                {
                    title: 1,
                    description: 1,
                    price: 1,
                },
            },
        ]);
    }
    public async getProduct(id: string): Promise<IProduct> {
        const mathched = await this.Product.aggregate([
            {
                $match: {
                    _id: new Types.ObjectId(id),
                },
            },
            {
                $lookup: {
                    from: "additives",
                    localField: "additives",
                    foreignField: "_id",
                    as: "additives",
                },
            },
        ]);
        return mathched[0];
    }
    public async createProduct(data: IProduct): Promise<void> {
        await this.Product.create(data);
    }
}
