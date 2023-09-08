import { Router } from "express";
import passengersRouter from "./passenger.routes.js";
import { citiesRouter } from "./cities.routes.js";

const indexRouter = Router()

indexRouter.get("/teste", (req,res) => {
    res.send("tachegan");
})

indexRouter.use(passengersRouter);
indexRouter.use(citiesRouter);

export { indexRouter };