import { model, Schema } from "mongoose";

import { IToken } from "./../interfaces/token.interface";

const tokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  refreshToken: { type: String, required: true },
});

export default model<IToken>("token", tokenSchema);
