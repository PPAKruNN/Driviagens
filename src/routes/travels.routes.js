import { Router } from 'express';
import validate from '../middlewares/schema.middleware.js';
import { travelSchema } from "../schemas/travels.schema.js"
import { travelsController } from '../controllers/travels.controller.js';

const travelsRouter = Router()

travelsRouter.post("/travels", validate(travelSchema.post), travelsController.create);

export { travelsRouter }