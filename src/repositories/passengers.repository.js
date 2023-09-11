import { db } from "../database/database.connection.js";
import { TooManyResultsError } from "../errors/TooManyResults.js";

async function create(fname, lname) {

    await db.query(
        `INSERT INTO passengers(first_name, last_name) VALUES ($1, $2)`, [
        fname, lname
    ]);

}

async function readTravelsWithFilter(name) {
    
    const response = await db.query(`
        SELECT Concat(passengers.first_name, ' ', passengers.last_name) as passenger, count(travels) as Travels 
        FROM travels
        INNER JOIN passengers
        ON travels.passenger_id = passengers.id
        INNER JOIN flights
        ON travels.flight_id = flights.id
        WHERE passengers.first_name ILIKE $1 OR passengers.last_name ILIKE $1
        GROUP BY passengers.id
        ORDER BY travels desc
    `, [name]);
    
    if(response.rows > 10) throw TooManyResultsError();
    
    return response.rows;

}

async function readTravels() {
    
    const response = await db.query(`
        SELECT Concat(passengers.first_name, ' ', passengers.last_name) as passenger, count(travels) as Travels 
        FROM travels
        INNER JOIN passengers
        ON travels.passenger_id = passengers.id
        INNER JOIN flights
        ON travels.flight_id = flights.id
        GROUP BY passengers.id
        ORDER BY travels desc
    `, []);
    
    if(response.rows > 10) throw TooManyResultsError();
    
    return response.rows;

}

export const passengersRepository = {
    create,
    readTravels,
    readTravelsWithFilter
}