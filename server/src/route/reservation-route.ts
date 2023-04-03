import express from 'express';
import bodyParser from 'body-parser';
import * as ReservationController from '../controller/reservation-controller.js';

const jsonParser = bodyParser.json()

export const reservationRoute = express.Router();

reservationRoute.get('', ReservationController.getReservations);
reservationRoute.get('/details/:id', ReservationController.getReservationById);
reservationRoute.put('', jsonParser, ReservationController.updateReservation);
reservationRoute.post('', jsonParser, ReservationController.addReservation);