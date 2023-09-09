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

function filterCreator(origin, destination, minDate, maxDate) {
    
    const filters = [];

    if(origin) filters.push(`orig.name = '${origin}'`);
    if(destination) filters.push(`dest.name = '${destination}'`);
    if(minDate && maxDate) filters.push(`start_date >= '${minDate}' AND start_date <= '${maxDate}'`);

    if(filters.length === 0) return "";
    const whereString = `WHERE ${filters.join(" AND ")}`
    
    console.log(whereString);
    return whereString;

}
    

async function read(origin, destination, minDate, maxDate) {
    
    const whereString = filterCreator(origin, destination, minDate, maxDate);
    const searchResult = await flightsRepository.readAll(whereString);

    const flights = searchResult.map( curr => { 
        curr.start_date = dayjs(curr.start_date).format("DD-MM-YYYY");
        return curr;
    });

    return flights;
}

function dateDiff(date) {

    const today = dayjs();
    const diff = date.diff(today, "days");

    return diff;

}

export const flightsService = {
    create,
    read
};