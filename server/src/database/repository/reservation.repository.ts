import {IRepository} from "./repository.js";
import {QueryResult} from "pg";
import {Reservation, ReservationDetails} from "../entity/reservation.entity.js";
import {ReservationCreationDTO} from "../../model/reservation.model.js";
import {QueryExecutor} from "../../provider/database.provider.js";

export class ReservationRepository implements IRepository<Reservation, ReservationCreationDTO> {

    getAll(): Promise<QueryResult<Reservation[]>> {
        return QueryExecutor.executeQuery("select * from reservations order by id");
    }

    getById(reservationId: number): Promise<QueryResult<ReservationDetails>> {
        return QueryExecutor.executeQuery(`select *
                                           from f_get_reservation_by_id(${reservationId})`);
    }

    add(reservationDTO: ReservationCreationDTO): Promise<QueryResult<Reservation>> {
        return QueryExecutor.executeQuery(`call p_add_reservation(${reservationDTO.flight_id}, ${reservationDTO.booking_party_id}, '${reservationDTO.participants})'`)
    }

    makePayment(reservationId: number): Promise<QueryResult<Reservation>> {
        return QueryExecutor.executeQuery(`call p_make_payment(${reservationId})`);
    }

    cancel(reservationId: number): Promise<QueryResult<Reservation>> {
        return QueryExecutor.executeQuery(`call p_cancel_reservation(${reservationId})`);
    }

}