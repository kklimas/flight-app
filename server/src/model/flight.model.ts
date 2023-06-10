import {FlightDelay} from "../database/entity/flight.entity.js";

export interface FlightCreationDTO {
    airline_id: string,
    departure_date: string,
    arrival_date: string,
    delay: FlightDelay;
    origin_id: string,
    destination_id: string,
    base_fare: number,
    adult_fare: number,
    no_total_places: number
}

