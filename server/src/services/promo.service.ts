import { Types } from "mongoose";

import { IPromo } from './../interfaces/promo.interface';
import PromoModel from "../models/promo.model";

export default class PromoService {
    private Promo = PromoModel;
    public async createPromo(promo: IPromo): Promise<void> {
        await this.Promo.create(promo);
    }
    public async deletePromo(id: string): Promise<void> {
        await this.Promo.deleteOne({ _id: new Types.ObjectId(id)});
    }
    public findPromoByCode = async (code: string): Promise<IPromo> => {
        return await this.Promo.findOne({ code });
    }
    public getAllPromo = async (): Promise<IPromo[]> => {
        return await this.Promo.find();
    }
}
