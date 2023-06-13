import {FlightDelay} from "./flight.model";


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
  participants: ReservationParticipant[];
}

export interface ReservationParticipant {
  reservation_id: number;
  first_name: string;
  last_name: string;
  is_adult: boolean;
}

export enum ReservationStatus {
  NEW, PAID, CANCELED
}

export interface ReservationCreationDTO {
  flight_id: string;
  booking_party_id: string;
  participants: ReservationParticipant[]
}
