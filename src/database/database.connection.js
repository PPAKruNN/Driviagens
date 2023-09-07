import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const config = {
    connectionString: process.env.DATABASE_URL,
};

if(process.env.NODE_ENV === "production") config.ssl = true;

export const db = new pg.Pool(config);