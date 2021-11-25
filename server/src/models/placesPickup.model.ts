import { model, Schema } from "mongoose";

import { IPlacesPickup } from "../interfaces/placesPickup.interface";

const placesPickupSchema = new Schema({
    city: { type: String, required: true },
    locations: {
        type: [
            {
                address: String,
            },
        ],
        required: true,
    },
});

export default model<IPlacesPickup>("placesPickup", placesPickupSchema);
