import pg from "pg";

const config = {
    connectionString: process.env.DATABASE_URL,
};

if(process.env.NODE_ENV === "production") config.ssl = true;

const db = new pg.Pool(config);