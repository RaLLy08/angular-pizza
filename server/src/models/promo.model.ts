import { model, Schema } from "mongoose";

import { IPromo } from "./../interfaces/promo.interface";

const promoSchema = new Schema({
  code: { type: String, required: true },
  bonus: { type: String, required: true },
});

export default model<IPromo>("promo", promoSchema);
