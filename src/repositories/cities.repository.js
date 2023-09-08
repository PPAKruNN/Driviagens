import { db } from "../database/database.connection.js";
import { DBError } from "../errors/DbError.js";

async function create(name) {
    await db.query(`INSERT INTO cities(name) VALUES ($1)`, [
        name
    ])
    .catch((error) => {
        throw DBError(error, "City");
    });
    
    // Here im overwriting the DB error. Really don't think it's a good way to do it, but again, im experimenting.
}


export const citiesRepository = {
    create    
}