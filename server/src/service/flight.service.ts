import {FlightRepository} from "../database/repository/flight.repository.js";
import {FlightCreationDTO} from "../model/flight.model.js";
import {FlightDelay} from "../database/entity/flight.entity.js";

const flightRepository = new FlightRepository();

export const getFlights = async () => {
    return await flightRepository.getAll();
}

export const getAvailableFlights = async () => {
    return await flightRepository.getAvailableFlights()
}

export const getFlightById = async (id: number) => {
    return await flightRepository.getById(id);
}

export const addFlight = async (flight: FlightCreationDTO) => {
    flight.delay = new FlightDelay(flight.delay.days, flight.delay.hours, flight.delay.minutes);
    return await flightRepository.add(flight);
}

export const delayFlight = async (flightId: number, delay: FlightDelay) => {
    return await flightRepository.delay(flightId, delay.toString());
}

export const cancelFlight = async (flightId: number) => {
    return await flightRepository.cancel(flightId);
}

export const getFlightParticipants = async (flightId: number) => {
    return await flightRepository.flightParticipants(flightId);
}