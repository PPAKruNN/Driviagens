import httpStatus from "http-status";
import ErrorEnum from "../errors/ErrorEnum.js";

function ErrorHandler(error, req, res, next) {
    if(error.type = ErrorEnum.validation) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    if(error.type = ErrorEnum.duplicate) return res.status(httpStatus.CONFLICT).send(error.message);
    if(error.type = ErrorEnum.badRoute) return res.status(httpStatus.CONFLICT).send(error.message);
    if(error.type = ErrorEnum.unknown) return res.status(httpStatus.NOT_FOUND).send(error.message);
    
    console.log("[Debug] Unknown error: ", error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}

export { ErrorHandler };