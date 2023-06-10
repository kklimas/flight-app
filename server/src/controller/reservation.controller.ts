import * as ReservationService from "../service/reservation.service.js";
import LogProvider from "../provider/log.provider.js";
import * as FlightService from "../service/flight.service.js";

export const getReservations = (req, res) => {
    ReservationService.getReservations()
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            LogProvider.error(err);
            res.sendStatus(400);
        })
}

export const getReservationById = (req, res) => {
    const id = req.params.id;
    ReservationService.getReservationById(id)
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(404);
    });
}

export const addReservation = (req, res) => {
    const reservationCreation = req.body;
    ReservationService.addReservation(reservationCreation)
        .then(() => {
            LogProvider.info(`Successfully added new reservation.`)
            res.sendStatus(201);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const makePaymentForReservation = (req, res) => {
    const reservationId = req.params.id;
    ReservationService.makePayment(reservationId)
        .then(() => {
            LogProvider.info(`Successfully made a payment for reservation with id ${reservationId}.`)
            res.sendStatus(200);
        }).catch(err => {
        LogProvider.error(err);
        res.send({status: 400, error: err});
    });
}

export const cancelReservation = (req, res) => {
    const reservationId = req.params.id;
    ReservationService.cancelReservation(reservationId)
        .then(() => {
            LogProvider.info(`Successfully canceled reservation with id ${reservationId}.`)
            res.sendStatus(200);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}