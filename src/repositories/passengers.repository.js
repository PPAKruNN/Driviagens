import { db } from "../database/database.connection.js";

async function create(fname, lname) {

    await db.query(
        `INSERT INTO passengers(first_name, last_name) VALUES ($1, $2)`, [
        fname, lname
    ]);

}

export const passengersRepository = {
    create 
}