import httpStatus from "http-status";
import { citiesService } from "../services/cities.service.js";

async function create(req, res) {
    const { name } = req.body;

    await citiesService.create(name);

    return res.sendStatus(httpStatus.NO_CONTENT);
    
}

export const citiesController = {
    create
};