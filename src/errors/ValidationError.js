import ErrorEnum from "./ErrorEnum.js";

function ValidationError (errorArray) {
    console.log(errorArray);

    const data = {
        type: ErrorEnum.validation, 
        message: errorArray.details.map( (curr) => curr.message),
    }
    
    return data;
}

export { ValidationError };