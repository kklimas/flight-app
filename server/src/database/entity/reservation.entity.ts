import {ReservationCreationDTO} from "../../model/reservation.model.js";

export interface Reservation extends ReservationCreationDTO {
    id: string;
    date: string;
    status: string;
}