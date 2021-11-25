import { model, Schema } from "mongoose";

import { IProduct } from "./../interfaces/product.interface";

const productSchema = new Schema({
    description: { type: String, required: false },
    ingredients: [{
        count: { type: String },
        title: { type: String },
    }],
    title: { type: String, required: true },
    additives: { ref: "additive", type: [Schema.Types.ObjectId] },
    size: {
        type: Array,
        default: ["small", "medium", "large"],
    },
    dough: {
        type: Array,
        default: ["thin", "traditional"],
    },
    price: { type: Number, required: true },
});

export default model<IProduct>("product", productSchema);
