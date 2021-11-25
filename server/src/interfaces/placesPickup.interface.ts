import { Types } from "mongoose";

export interface IPlacesPickup {
    _id: Types.ObjectId;
    city: string;
    locations: [
        {
            address: string,
        }
    ];
}
