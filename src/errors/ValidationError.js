import ErrorEnum from "./ErrorEnum.js";

function ValidationError (errorArray) {
    const data = {
        type: ErrorEnum.validation, 
        message: "MOCK_ERROR_MESSAGE",
    }
    
    return data;
}


export { ValidationError };