import Joi from "joi";

const post = Joi.object({

    passengerId: Joi.number()
                    .integer()
                    .positive()
                    .allow(0)
                    .required(),

    flightId: Joi.number()
                .integer()
                .positive()
                .allow(0)
                .required(),

})


export const travelSchema = {
    post
}
