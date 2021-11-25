import { model, Schema } from "mongoose";

import { ICountry } from "./../interfaces/country.interface";

const countrySchema = new Schema({
  name: { type: String, required: true },
});

export default model<ICountry>("country", countrySchema);
