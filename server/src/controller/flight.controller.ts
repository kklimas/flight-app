import * as FlightService from "../service/flight.service.js"
import LogProvider from "../provider/log.provider.js";
import {FlightDelay} from "../database/entity/flight.entity.js";
import {Request, Response} from "express";

export const getFlights = (req: Request, res: Response) => {
    FlightService.getFlights()
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const getFlightById = (req: Request, res: Response) => {
    const id = req.params.id;
    FlightService.getFlightById(parseInt(id))
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(404);
    });
}

export const getAvailableFlights = (req: Request, res: Response) => {
    FlightService.getAvailableFlights()
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const addFlight = (req: Request, res: Response) => {
    const flightCreation = req.body;
    FlightService.addFlight(flightCreation)
        .then(() => {
            LogProvider.info(`Successfully created new flight.`)
            res.sendStatus(201);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const delayFlight = (req: Request, res: Response) => {
    const flightId = req.params.id;
    const delay = req.body;
    FlightService.delayFlight(parseInt(flightId), new FlightDelay(delay.days, delay.hours, delay.minutes))
        .then(() => {
            LogProvider.info(`Delayed flight with id ${flightId}.`)
            res.sendStatus(200);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const cancelFlight = (req: Request, res: Response) => {
    const flightId = req.params.id;
    FlightService.cancelFlight(parseInt(flightId))
        .then(() => {
            LogProvider.info(`Canceled flight with id ${flightId} and all reservations for this flight.`)
            res.sendStatus(200);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const getFlightParticipants = (req: Request, res: Response) => {
    const flightId = req.params.id;
    FlightService.getFlightParticipants(parseInt(flightId))
        .then((data) => {
            res.send(data.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}