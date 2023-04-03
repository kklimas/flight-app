import * as FlightService from "../service/flight-service.js"
import LogProvider from "../provider/log-provider.js";

export const getFlights = (req, res) => {
    FlightService.getFlights()
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const getFlightById = (req, res) => {
    const id = req.params.id;
    FlightService.getFlightById(id)
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(404);
    });
}

export const getAvailableFlights = (req, res) => {
    FlightService.getAvailableFlights()
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const addFlight = (req, res) => {
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