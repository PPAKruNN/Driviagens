import Joi from 'joi';

const post = Joi.object({

    firstName: Joi.string()
                .max(100)
                .min(2)
                .required(),

    lastName: Joi.string()
                .max(100)
                .min(2)
                .required(),

}).required();

export const passengerSchema = { 
    post
};