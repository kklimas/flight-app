import express from 'express';
import * as FlightController from '../controller/flight.controller.js'

export const flightRoute = express.Router();

flightRoute.get('', FlightController.getFlights) //todo
flightRoute.post('', FlightController.addFlight)
flightRoute.get('/details/:id', FlightController.getFlightById)
flightRoute.get('/participants/:id', FlightController.getFlightParticipants) //todo
flightRoute.get('/available', FlightController.getAvailableFlights) //todo
flightRoute.put('/delay/:id', FlightController.delayFlight)
flightRoute.delete('/cancel/:id', FlightController.cancelFlight)
