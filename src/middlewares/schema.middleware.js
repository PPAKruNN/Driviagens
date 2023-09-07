import { ValidationError } from "../errors/ValidationError.js";

export default function validate(schema) {

    return (req, res, next) => {
        
        const result = schema.validate(req.body);
        if(result.error) throw ValidationError(result.error);
        
        next();
    }
    
};