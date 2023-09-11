import ErrorEnum from "./ErrorEnum.js";

function DBError(PGError, resource = "Resource", extras = "") {

    // Debug
    // console.log("[Debug] DbError: ")
    // console.log(PGError);
    
    const data = {}

    switch (PGError.code) {
        case '23505': // pgsql unique_violation;
            data.message = `${resource} already exists!`;
            data.type = ErrorEnum.duplicate;
        break;

        case '23503': // pgsql fkey_violation;
            data.message = `${resource} does not have existing ${extras}!`;
            data.type = ErrorEnum.unknownError;
        break;
        
        default:
            console.log(PGError);
            data.message = "Unknown error on database";
        break;

    }
    
    return data;
}


export { DBError };