import Joi from 'joi';

const post = Joi.object({

    origin: Joi.number()
            .integer()
            .positive()
            .allow(0)
            .required(),

    destination: Joi.number()
            .integer()
            .positive()
            .allow(0)
            .required(),
    
    date: Joi.date()
            .required()
            .format("DD-MM-YYYY")
            .raw()

})

export const flightSchema = {
    post
};