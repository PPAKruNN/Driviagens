import Express, { json } from "express";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT ?? 5000;
const app = Express();

app.use(json);
app.use(cors);
app.use(router);


app.listen(port);