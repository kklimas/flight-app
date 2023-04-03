import {FlightRepository} from "../database/repository/FlightRepository.js";
import {FlightCreationDTO} from "../model/flight.js";
import {Flight} from "../database/entity/Flight.js";

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
