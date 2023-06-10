import express from 'express';
import * as FlightController from '../controller/flight.controller.js'

export const flightRoute = express.Router();

flightRoute.get('', FlightController.getFlights)
flightRoute.post('', FlightController.addFlight)
flightRoute.get('/details/:id', FlightController.getFlightById)
flightRoute.get('/participants/:id', FlightController.getFlightParticipants)
flightRoute.get('/available', FlightController.getAvailableFlights)
flightRoute.put('/delay/:id', FlightController.delayFlight)
flightRoute.delete('/cancel/:id', FlightController.cancelFlight)
