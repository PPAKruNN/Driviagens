import { Router } from 'express';
import  validate  from "../middlewares/schema.middleware.js"
import { flightsController } from '../controllers/flights.controller.js';
import { flightSchema } from '../schemas/flights.schema.js';

const flightsRouter = Router();

flightsRouter.post("/flights", validate(flightSchema.post), flightsController.create);

export { flightsRouter };