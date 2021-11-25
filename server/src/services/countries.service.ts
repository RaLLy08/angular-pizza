import CountryModel from "../models/country.model";

import { ICountry } from "./../interfaces/country.interface";

export default class CountriesService {
    private Country = CountryModel;
    public async getCountries(): Promise<ICountry[]> {
        return await this.Country.find();
    }
}
