import { model, Schema } from "mongoose";

import { IUser } from "./../interfaces/user.interface";

const userSchema = new Schema({
  password: { type: String, required: true  },
  phone: { type: String, unique: true, required: true },
  role: { type: String, required: true, enum: ["admin", "user"], default: "user" },
});

export default model<IUser>("user", userSchema);
