import Joi from "joi";

const post = Joi.object({

    name: Joi.string()
            .min(2)
            .max(50)
            .required()

})


export const citiesSchema = {
    post
};