import {IRepository} from "./repository.js";
import {Flight} from "../entity/flight.entity.js";
import {QueryExecutor} from "../../provider/database.provider.js";
import {QueryResult} from "pg";
import {FlightCreationDTO} from "../../model/flight.model.js";

export class FlightRepository implements IRepository<Flight, FlightCreationDTO> {

    getAll(): Promise<QueryResult<Flight[]>> {
        return QueryExecutor.executeQuery("select * from flights");
    }

    getAvailableFlights(): Promise<QueryResult<Flight[]>> {
        return QueryExecutor.executeQuery("select * from available_flights");
    }

    getById(flightId: number): Promise<QueryResult<Flight>> {
        return QueryExecutor.executeQuery(`select *
                                           from f_get_flight_by_id(${flightId})`);
    }

    delay(flightId: number, delay: string): Promise<QueryResult<Flight>> {
        return QueryExecutor.executeQuery(`call p_delay_flight(${flightId}, '${delay}')`);
    }

    cancel(flightId: number): Promise<QueryResult<Flight>> {
        return QueryExecutor.executeQuery(`call p_cancel_flight(${flightId})`);
    }

    add(flight: FlightCreationDTO): Promise<QueryResult<Flight>> {
        return QueryExecutor.executeQuery(`call p_add_flight(${flight.airline_id}, '${flight.departure_date}', '${flight.arrival_date}', '${flight.delay.toString()}', '${flight.origin_id}', '${flight.destination_id}', ${flight.base_fare}, ${flight.adult_fare}, ${flight.no_total_places})`);
    }

    flightParticipants(flightId: number): Promise<QueryResult<Flight[]>> {
        return QueryExecutor.executeQuery(`select *
                                           from f_flight_participants(${flightId})`);
    }

}