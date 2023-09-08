import { Router } from "express";
import validate from "../middlewares/schema.middleware.js";
import { citiesSchema } from "../schemas/cities.schema.js";
import { citiesController } from "../controllers/cities.controller.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validate(citiesSchema.post), citiesController.create);

export { citiesRouter };