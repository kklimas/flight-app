import {ReservationStatus} from "./reservation.entity.js";

export interface PaymentOperation {
    id: number;
    reservation_id: number;
    type: PaymentType;
    amount: number;
    date: string;
    username: string;
    account_number: string;
}

export enum PaymentType {
    INCOME, OUTCOME
}

export interface UserReservationLog {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    logs: ReservationLog[];
}

export interface ReservationLog {
    log_date: string;
    reservation_id: number;
    status: ReservationStatus;
}