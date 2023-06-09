import {FlightCreationDTO} from "../../model/flight.model.js";

export interface Flight extends FlightCreationDTO{
    id: string;
}