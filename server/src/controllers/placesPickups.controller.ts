import { Request, Response } from "express";

import PlacesPickupsService from "../services/placesPickups.service";

export default class PlacesPickupsController {
    private placesPickupsService = new PlacesPickupsService();
    public getPlacesPickups = async (req: Request, res: Response) => {
        const placesPickups = await this.placesPickupsService.getPlacesPickups();
        res.json(placesPickups);
    }
    public createPlacesPickup = async (req: Request, res: Response) => {
        const placesPickup = req.body;

        await this.placesPickupsService.createPlacesPickup(placesPickup);

        res.json(placesPickup);
    }
    // public getPlacesPickupByCity = async (req, res) => {
    //     const { id } = req.params;

    //     const product = await this.productsService.getProduct(id);
    //     res.json(product);
    // }
}
