import express from 'express';
import bodyParser from 'body-parser';
import * as FlightController from '../controller/flight-controller.js'

const jsonParser = bodyParser.json()

export const flightRoute = express.Router();

flightRoute.get('', FlightController.getFlights)
flightRoute.get('/details/:id', FlightController.getFlightById)
flightRoute.get('/available', FlightController.getAvailableFlights)
flightRoute.put('', jsonParser, FlightController.updateFlight)
flightRoute.post('', jsonParser, FlightController.addFlight)
