import {ReservationCreationDTO} from "../../model/reservation.js";

export interface Reservation extends ReservationCreationDTO {
    id: string;
}