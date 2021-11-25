import PlacesPickupModel from "../models/placesPickup.model";

import { IPlacesPickup } from "./../interfaces/placesPickup.interface";

export default class PlacesPickupsService {
    private PlacesPickup = PlacesPickupModel;
    public async getPlacesPickups(): Promise<IPlacesPickup[]> {
        return await this.PlacesPickup.find();
    }
    public async createPlacesPickup(placesPickup: IPlacesPickup): Promise<void> {
        await this.PlacesPickup.create(placesPickup);
    }
    // public async setNewLocationInCity(placesPickup: IPlacesPickup): Promise<void> {
    //     await this.PlacesPickup.create(placesPickup);
    // }
}
