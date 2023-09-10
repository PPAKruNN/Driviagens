import { travelsRepository } from "../repositories/travels.repository.js"

async function create(passengerId, flightId) {

    await travelsRepository.create(passengerId, flightId);
    
}

export const travelsService = {
    create
}