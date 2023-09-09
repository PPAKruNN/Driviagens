import ErrorEnum from "./ErrorEnum.js";

function BadDateError () {
    const data = {
        type: ErrorEnum.badDate, 
        message: "Impossible date selection. Cannot register flight on past or today.",
    }
    
    return data;
}


export { BadDateError };