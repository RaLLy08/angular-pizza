import { Request, Response } from "express";

import PromoService from "../services/promo.service";
import { IPromo } from './../interfaces/promo.interface';

export default class PromoController {
    private promoService = new PromoService();
    public createPromo = async (req: Request, res: Response) => {
        const promo: IPromo = req.body;
        
        await this.promoService.createPromo(promo);

        res.end();
    }
    public deletePromo = async (req: Request, res: Response) => {
        const { id } = req.params;

        await this.promoService.deletePromo(id);

        res.end();
    }
    public getAllPromo = async (req: Request, res: Response) => {
        const allPromo: IPromo[] = await this.promoService.getAllPromo();

        res.json(allPromo);
    }
    public getPromoByCode = async (req: Request, res: Response) => {
        const { code } = req.params;
        const promo: IPromo = await this.promoService.findPromoByCode(code);
    
        res.json(promo);
    }
}
