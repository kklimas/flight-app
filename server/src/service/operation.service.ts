import {QueryExecutor} from "../provider/database.provider.js";
import {QueryResult} from "pg";
import {PaymentOperation, ReservationLog} from "../database/entity/operation.entity.js";

export const findPaymentTransactions = (): Promise<QueryResult<PaymentOperation>> => {
    return QueryExecutor.executeQuery("select * from payment_transactions")
}

export const findUserReservationTransactions = (userId: number): Promise<QueryResult<ReservationLog>> => {
    return QueryExecutor.executeQuery(`select * from f_user_transactions(${userId})`)
}
