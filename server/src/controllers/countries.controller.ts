import { Request, Response } from "express";

import CountriesService from "../services/countries.service";

export default class CountriesController {
    private countriesService = new CountriesService();
    public getCountries = async (req: Request, res: Response) => {
        const countries = await this.countriesService.getCountries();
        res.json(countries);
    }
}
