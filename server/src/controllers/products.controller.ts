import { Request, Response } from "express";
import { Types } from "mongoose";

import ProductsService from "../services/products.service";

export default class ProductsController {
    private productsService = new ProductsService();
    public getProducts = async (req: Request, res: Response) => {
        const products = await this.productsService.getProducts();
        res.json(products);
    }
    public getProduct = async (req: Request, res: Response) => {
        const { id } = req.params;

        const product = await this.productsService.getProduct(id);
        res.json(product);
    }
    public createProduct = async (req: Request, res: Response) => { // admin
        const product = req.body;
        try {
            await this.productsService.createProduct(product);
            res.json(product);

        } catch (error) {
            res.json(error);
        }
    }
}
