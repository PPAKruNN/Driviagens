import ErrorEnum from "./ErrorEnum.js";

function TooManyResultsError () {
    const data = {
        type: ErrorEnum.toomany, 
        message: "Too many results",
    }
    
    return data;
}


export { TooManyResultsError };