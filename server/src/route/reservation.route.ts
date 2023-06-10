import express from 'express';
import * as ReservationController from '../controller/reservation.controller.js';


export const reservationRoute = express.Router();

reservationRoute.get('', ReservationController.getReservations);
reservationRoute.get('/:id', ReservationController.getReservationById);
reservationRoute.put('/payment/:id', ReservationController.makePaymentForReservation);
reservationRoute.delete('/cancel/:id', ReservationController.cancelReservation);