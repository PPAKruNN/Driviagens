import { db } from "../database/database.connection.js";
import { DBError } from "../errors/DbError.js";

async function create(origin, destination, start_date) {
    
    await db.query(`INSERT INTO flights(origin, destination, start_date) VALUES ($1, $2, $3)`, [
        origin, destination, start_date

    ])
    .catch((error) => {
        throw DBError(error, "Flight") ;
    });

};


export const flightsRepository = {
    create
}