import {FlightDelay} from "./flight.entity.js";

export interface Reservation {
    id: number;
    flight_id: number;
    reservation_date: string;
    status: ReservationStatus;
    booking_party_username: string;
    participants_number: number;
    departure_date: number;
    arrival_date: number;
    delay: FlightDelay;
    origin_city: string;
    destination_city: string;
}

export interface ReservationDetails extends Reservation {
    base_fare: number;
    adult_fare: number;
    participants: string;
}

export enum ReservationStatus {
    NEW, PAID, CANCELED
}