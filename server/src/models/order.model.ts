import { model, Schema, Types } from "mongoose";

import { IOrder } from "../interfaces/order.interface";

const deliveryExtraSchema = new Schema({
    address: { type: String, required: true },
    comment: { type: String, required: false },
});

const pickupExtraSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    placePickup: {
        type: Types.ObjectId,
        ref: "placesPickup",
        required: true,
    },
});

const orderSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "user",
        required: true,
    },
    products: [
        {
            type: Types.ObjectId,
            required: false,
            ref: "product",
        },
    ],
    additives: [
        {
            type: Types.ObjectId,
            required: false,
            ref: "additive",
        },
    ],
    acceptedDate: { type: Date, required: true, default: new Date() },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "In delivery", "Rejected", "Delivered"],
        default: "Pending",
    },
    promo: {
        type: Types.ObjectId,
        required: false,
        ref: "promo",
    },
    delivery: {
        type: deliveryExtraSchema,
        required() {
            return !this.pickup;
        },
        default: null,
    },
    pickup: {
        type: pickupExtraSchema,
        required() {
            return !this.delivery;
        },
        default: null,
    },
});

export default model<IOrder>("order", orderSchema);
