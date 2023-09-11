import { passengersRepository } from "../repositories/passengers.repository.js"

async function create (fname, lname) {
   
    await passengersRepository.create(fname, lname);

}

async function readTravels(name) {

    let response;

    if(name) {
        response = await passengersRepository.readTravelsWithFilter(name);
    } else {
        response = await passengersRepository.readTravels();
    }
    
    return response;

}

export const passengersService = {
    create,
    readTravels
}