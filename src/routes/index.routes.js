import { Router } from "express";
import passengersRouter from "./passenger.routes.js";
import { citiesRouter } from "./cities.routes.js";
import { flightsRouter } from "./flights.routes.js";

const indexRouter = Router()

indexRouter.get("/teste", (req,res) => {
    res.send("tachegan");
})

indexRouter.use(passengersRouter);
indexRouter.use(citiesRouter);
indexRouter.use(flightsRouter);

export { indexRouter };