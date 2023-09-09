import ErrorEnum from "./ErrorEnum.js";

function BadRouteError () {
    const data = {
        type: ErrorEnum.badRoute, 
        message: "Impossible route. Cannot register flight destination as it's own origin",
    }
    
    return data;
}


export { BadRouteError };