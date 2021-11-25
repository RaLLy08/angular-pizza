import { Request, Response } from "express";

import AdditivesService from "../services/additives.service";

export default class AdditivesController {
    private additivesService = new AdditivesService();
    public getAdditives = async (req: Request, res: Response) => {
        const additives = await this.additivesService.getAdditives();
        res.json(additives);
    }
    public createAdditive = async (req: Request, res: Response) => {
        const { title, price } = req.body;

        await this.additivesService.createAdditive({ title, price });
        res.end();
    }
}
