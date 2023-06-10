import {ReservationRepository} from "../database/repository/reservation.repository.js";
import {ReservationCreationDTO} from "../model/reservation.model.js";

const reservationRepository = new ReservationRepository();

export const getReservations = async () => {
    return await reservationRepository.getAll();
}

export const getReservationById = async (id: number) => {
    return await reservationRepository.getById(id);
}

export const addReservation = async (reservationDTO: ReservationCreationDTO) => {
    return await reservationRepository.add(reservationDTO);
}

export const makePayment = async (reservationId: number) => {
    return await reservationRepository.makePayment(reservationId);
}

export const cancelReservation = async (reservationId: number) => {
    return await reservationRepository.cancel(reservationId);
}