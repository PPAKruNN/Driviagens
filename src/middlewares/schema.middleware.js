import { ValidationError } from "../errors/ValidationError.js";

export default function validate(schema, type = "body") {

    return (req, res, next) => {

        const target = req[type];

        const result = schema.validate(target);
        if(result.error) throw ValidationError(result.error);
        
        next();
    }
    
};