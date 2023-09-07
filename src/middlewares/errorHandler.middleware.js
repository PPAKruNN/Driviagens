import httpStatus from "http-status";
import ErrorEnum from "../errors/ErrorEnum.js";

function ErrorHandler(error, req, res, next) {
    if(error.type = ErrorEnum.validation) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
   
    
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}

export { ErrorHandler };