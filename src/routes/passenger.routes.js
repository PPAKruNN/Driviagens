import { Router } from "express";
import { passengersController } from "../controllers/passengers.controller.js";
import validate from "../middlewares/schema.middleware.js";
import { passengerSchema } from "../schemas/passenger.schema.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validate(passengerSchema.post), passengersController.create);

export default passengersRouter;