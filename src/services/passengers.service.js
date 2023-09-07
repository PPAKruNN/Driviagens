import { passengersRepository } from "../repositories/passengers.repository.js"

async function create (fname, lname) {
   
    await passengersRepository.create(fname, lname);

}

export const passengersService = {
    create
}