import AdditiveModel from "../models/additive.model";

import { IAdditive } from "../interfaces/additive.interface";

export default class AdditivesService {
    private Additive = AdditiveModel;
    public async getAdditives(): Promise<IAdditive[]> {
        return await this.Additive.find();
    }
    public async createAdditive(additive: IAdditive): Promise<void> {
        await this.Additive.create(additive);
    }
}
