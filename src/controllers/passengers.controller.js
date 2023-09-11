import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

async function create(req, res) {

    const {firstName, lastName} = req.body;
    
    await passengersService.create(firstName, lastName);
   
    res.sendStatus(httpStatus.CREATED);

};

async function readTravels(req, res) {
    
    const { name } = req.query;

    const response = await passengersService.readTravels(name)
    
    res.send(response);

}

export const passengersController = {
    create,
    readTravels
};