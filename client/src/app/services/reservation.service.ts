import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation, ReservationCreationDTO, ReservationDetails} from "../models/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private RESERVATION = 'reservation';

  constructor(private httpClient: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.RESERVATION);
  }

  addReservation(dto: ReservationCreationDTO): Observable<void> {
    return this.httpClient.post<void>(this.RESERVATION, dto);
  }

  getReservationById(reservationId: number): Observable<ReservationDetails> {
    return this.httpClient.get<ReservationDetails>(`${this.RESERVATION}/${reservationId}`)
  }

  makePaymentForReservation(reservationId: number): Observable<any> {
    return this.httpClient.put<void>(`${this.RESERVATION}/payment/${reservationId}`, {});
  }

  cancelReservation(reservationId: number): Observable<any> {
    return this.httpClient.delete<void>(`${this.RESERVATION}/cancel/${reservationId}`);
  }
}
