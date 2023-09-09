import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";
import dayjs from "dayjs";
import { BadDateFilterError } from "../errors/BadDateFilterError.js";

async function create(req, res) {
    
    const { origin, destination, date } = req.body;
    
    await flightsService.create(origin, destination, date);

    res.sendStatus(httpStatus.CREATED);

}

async function read(req, res) {
    
    const { origin, destination } = req.query;
    const smallerDate = req.query['smaller-date'];
    const biggerDate = req.query['bigger-date'];
    let minDate, maxDate;

    if(smallerDate && biggerDate) {

        minDate = dayjs(smallerDate, "DD-MM-YYYY");
        maxDate = dayjs(biggerDate, "DD-MM-YYYY");
        if(!maxDate.isAfter(minDate)) throw BadDateFilterError();

        minDate = minDate.toISOString();
        maxDate = maxDate.toISOString();
       
    }
    console.log(minDate, maxDate);
    const flights = await flightsService.read(origin, destination, minDate, maxDate);
    res.send(flights);
}


export const flightsController = {
    create,
    read
};