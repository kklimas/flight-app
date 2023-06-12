import {QueryExecutor} from "../provider/database.provider.js";
import {QueryResult} from "pg";
import {PaymentOperation, UserReservationLog} from "../database/entity/operation.entity.js";

export const findPaymentTransactions = (): Promise<QueryResult<PaymentOperation>> => {
    return QueryExecutor.executeQuery("select * from payment_transactions order by id")
}

export const findReservationTransactions = (): Promise<QueryResult<UserReservationLog[]>> => {
    return QueryExecutor.executeQuery(`select * from reservation_transactions`);
}

export const findUserReservationTransactions = (userId: number): Promise<QueryResult<UserReservationLog>> => {
    return QueryExecutor.executeQuery(`select * from f_user_transactions(${userId})`)
}
