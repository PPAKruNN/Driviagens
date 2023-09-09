import JoiVanilla from 'joi';
import JoiDate from '@joi/date';

const Joi = JoiVanilla.extend(JoiDate);

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
            .format("DD-MM-YYYY")
            .required()

})

const get = Joi.object({

    origin: Joi.string(),

    destination: Joi.string(),
    
    "smaller-date":  Joi.date()
                        .format("DD-MM-YYYY"),

    "bigger-date":  Joi.date()
                        .format("DD-MM-YYYY"),

}).and('smaller-date', 'bigger-date');

export const flightSchema = {
    post,
    get
};
