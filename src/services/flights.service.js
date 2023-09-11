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

};

function filterCreator(origin, destination, minDate, maxDate) {
    
    const filters = [];
    const args = [];
    let i = 0;

    if(origin) {
        i++;
        args.push(origin);
        filters.push(`orig.name = $${i}`);
    }
    if(destination) {
        i++;
        args.push(destination);
        filters.push(`dest.name = $${i}`);
    }
    if(minDate && maxDate) {
        i++;
        args.push(minDate);
        filters.push(`start_date >= $${i} `);

        i++
        args.push(maxDate);
        filters.push(`start_date <= $${i}
 `);
    }

    if(filters.length === 0) return "";
    const whereString = `WHERE ${filters.join(" AND ")}`
    
    console.log(whereString);
    return { whereString, args };

}
    

async function read(origin, destination, minDate, maxDate) {
    
    const filter = filterCreator(origin, destination, minDate, maxDate);
    const searchResult = await flightsRepository.readAll(filter.whereString, filter.args);

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