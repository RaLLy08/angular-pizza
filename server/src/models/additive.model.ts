import { model, Schema } from "mongoose";

import { IAdditive } from "./../interfaces/additive.interface";

const additiveSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

export default model<IAdditive>("additive", additiveSchema);
