import { BadRouteError } from "../errors/BadRouteError.js";
import { BadDateError } from "../errors/BadDateError.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import { flightsRepository } from "../repositories/flights.repository.js";

dayjs.extend(customParseFormat);

async function create(origin, dest, date) {
    
    const flightDate = dayjs(date, "DD-MM-YYYY");
    const diff = dateDiff(flightDate);

    if(origin === dest) throw BadRouteError();
    if(diff <= 0) throw BadDateError();
   
    await flightsRepository.create(origin, dest, flightDate.toISOString());
    // create flight

};

function dateDiff(date) {

    const today = dayjs();
    const diff = date.diff(today, "days");

    return diff;

}

export const flightsService = {
    create 
};