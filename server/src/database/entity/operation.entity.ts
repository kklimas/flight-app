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

export interface ReservationLog {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    logs: string;
}