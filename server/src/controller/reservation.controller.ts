import * as ReservationService from "../service/reservation.service.js";
import LogProvider from "../provider/log.provider.js";
import {Request, Response} from "express";

export const getReservations = (req: Request, res: Response) => {
    ReservationService.getReservations()
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            LogProvider.error(err);
            res.sendStatus(400);
        })
}

export const getReservationById = (req: Request, res: Response) => {
    const id = req.params.id;
    ReservationService.getReservationById(parseInt(id))
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(404);
    });
}

export const addReservation = (req: Request, res: Response) => {
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

export const makePaymentForReservation = (req: Request, res: Response) => {
    const reservationId = req.params.id;
    ReservationService.makePayment(parseInt(reservationId))
        .then(() => {
            LogProvider.info(`Successfully made a payment for reservation with id ${reservationId}.`)
            res.sendStatus(200);
        }).catch(err => {
        LogProvider.error(err);
        res.send({status: 400, error: err});
    });
}

export const cancelReservation = (req: Request, res: Response) => {
    const reservationId = req.params.id;
    ReservationService.cancelReservation(parseInt(reservationId))
        .then(() => {
            LogProvider.info(`Successfully canceled reservation with id ${reservationId}.`)
            res.sendStatus(200);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}