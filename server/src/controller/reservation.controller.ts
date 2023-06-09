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

export const updateReservation = (req, res) => {
    const reservationUpdate = req.body;
    ReservationService.updateReservation(reservationUpdate)
        .then(() => {
            LogProvider.info(`Successfully updated reservation.`)
            res.sendStatus(200);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
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