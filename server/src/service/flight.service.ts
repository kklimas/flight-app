import {FlightRepository} from "../database/repository/flight.repository.js";
import {FlightCreationDTO} from "../model/flight.model.js";
import {Flight} from "../database/entity/flight.entity.js";

const flightRepository = new FlightRepository();

export const getFlights = async () => {
    return await flightRepository.getAll();
}

export const getAvailableFlights = async () => {
    return await flightRepository.getAvailableFlights()
}

export const getFlightById = async (id: string) => {
    return await flightRepository.getById(id);
}

export const addFlight = async (flight: FlightCreationDTO) => {
    return await flightRepository.add(flight);
}

export const updateFlight = async (flight: Flight) => {
    return await flightRepository.update(flight);
}
