import Express, { json } from "express";
import "express-async-errors";
import dotenv from 'dotenv';
import cors from 'cors';
import { indexRouter } from "./routes/index.routes.js";
import { ErrorHandler } from "./middlewares/errorHandler.middleware.js";

dotenv.config();
const port = process.env.PORT ?? "5000";
const app = Express();

app.use(cors());
app.use(json());
app.use(indexRouter);
app.use(ErrorHandler);

app.listen(port, () => console.log("Server started on port:", port));