import ErrorEnum from "./ErrorEnum.js";

function BadDateFilterError () {
    const data = {
        type: ErrorEnum.badDateFilter, 
        message: "Impossible date selection. Cannot filter by dates if smaller-date is better than bigger-date.",
    }
    
    return data;
}

export { BadDateFilterError };