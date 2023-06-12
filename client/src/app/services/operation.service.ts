import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaymentOperation, ReservationTransaction, UserReservationLog} from "../models/operation.model";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private OPERATION = 'operation'

  constructor(private httpClient: HttpClient) {
  }

  getPayments(): Observable<PaymentOperation[]> {
    return this.httpClient.get<PaymentOperation[]>(`${this.OPERATION}/payments`)
  }

  getTransactions(): Observable<ReservationTransaction[]> {
    return this.httpClient.get<ReservationTransaction[]>(`${this.OPERATION}`)
  }

  getUserTransactions(userId: number): Observable<UserReservationLog> {
    return this.httpClient.get<UserReservationLog>(`${this.OPERATION}/user/${userId}`)
  }
}
