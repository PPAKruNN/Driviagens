import { db } from "../database/database.connection.js"
import { DBError } from "../errors/DbError.js";

async function create(passengerId, flightId) {
    await db.query(`INSERT INTO travels(passenger_id, flight_id) VALUES ($1, $2)`,[
        passengerId, flightId
    ])
    .catch( error => {throw DBError(error, "Travel", "passenger or flight id")});
}


export const travelsRepository = {
    create
}