import {ReservationRepository} from "../database/repository/ReservationRepository.js";
import {Reservation} from "../database/entity/Reservation.js";
import {ReservationCreationDTO} from "../model/reservation.js";

const reservationRepository = new ReservationRepository();

export const getReservations = async () => {
    return await reservationRepository.getAll();
}

export const getReservationById = async (id: string) => {
    return await reservationRepository.getById(id);
}

export const updateReservation = async (reservation: Reservation) => {
    return await reservationRepository.update(reservation);
}

export const addReservation = async (reservationDTO: ReservationCreationDTO) => {
    return await reservationRepository.add(reservationDTO);
}