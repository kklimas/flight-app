import {IRepository} from "./IRepository.js";
import {QueryResult} from "pg";
import {Reservation} from "../entity/Reservation.js";
import {ReservationCreationDTO} from "../../model/reservation.js";
import {QueryExecutor} from "../../provider/database-provider.js";

export class ReservationRepository implements IRepository<Reservation, ReservationCreationDTO> {

    getAll(): Promise<QueryResult<Reservation[]>> {
        return QueryExecutor.executeQuery("select * from reserved_flights");
    }

    getById(reservationId: string): Promise<QueryResult<Reservation>> {
        return QueryExecutor.executeQuery(`select *
                                           from reserved_flights
                                           where id = '${reservationId}'`);
    }

    update(reservation: Reservation): Promise<QueryResult<Reservation>> {
        return QueryExecutor.executeQuery(`update t_reserved_flight
                                           set reservation_status='${reservation.reservation_status}'`);
    }

    add(reservationDTO: ReservationCreationDTO): Promise<QueryResult<Reservation>> {
        return QueryExecutor.executeQuery(`insert into t_reserved_flight (flight_id, user_id)
                                           VALUES ('${reservationDTO.flight_id}', '${reservationDTO.user_id}')`)
    }

}