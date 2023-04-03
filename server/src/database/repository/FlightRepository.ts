import {IRepository} from "./IRepository.js";
import {Flight} from "../entity/Flight.js";
import {QueryExecutor} from "../../provider/database-provider.js";
import {QueryResult} from "pg";
import {AvailableFlight, FlightCreationDTO} from "../../model/flight.js";

export class FlightRepository implements IRepository<Flight, FlightCreationDTO> {

    getAll(): Promise<QueryResult<Flight[]>> {
        return QueryExecutor.executeQuery("select * from t_flight");
    }

    getAvailableFlights(): Promise<QueryResult<AvailableFlight[]>> {
        return QueryExecutor.executeQuery("select * from available_flights");
    }

    getById(flightId: string): Promise<QueryResult<Flight>> {
        return QueryExecutor.executeQuery(`select *
                                           from t_flight t
                                           where t.id = ${flightId}`);
    }

    update(flight: Flight): Promise<QueryResult<Flight>> {
        const query = `update t_flight
                       set airline_id='${flight.airline_id}',
                           departure_date='${flight.departure_date}',
                           arrival_date='${flight.arrival_date}',
                           origin='${flight.origin}',
                           destination='${flight.destination}',
                           base_fare='${flight.base_fare}',
                           adult_fare='${flight.adult_fare}',
                           no_total_places='${flight.no_total_places}',
                           no_available_places='${flight.no_available_places}'
                       where id = '${flight.id}'`
        return QueryExecutor.executeQuery(query);
    }

    delete(flightId: string): Promise<QueryResult<Flight>> {
        return QueryExecutor.executeQuery(`delete
                                           from t_flight t
                                           where t.id = ${flightId}`);
    }

    add(flight: FlightCreationDTO): Promise<QueryResult<Flight>> {
        const query = `insert into t_flight (airline_id, departure_date, arrival_date, origin, destination, base_fare,
                                             adult_fare, no_total_places, no_available_places)
                       values ('${flight.airline_id}', '${flight.departure_date}', '${flight.arrival_date}',
                               '${flight.origin}', '${flight.destination}', '${flight.base_fare}', '${flight.adult_fare}
                               ', '${flight.no_total_places}', '${flight.no_available_places}')`
        return QueryExecutor.executeQuery(query);
    }

}