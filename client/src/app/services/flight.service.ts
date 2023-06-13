import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight, FlightDelay} from "../models/flight.model";
import {ReservationParticipant} from "../models/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private FLIGHTS = 'flights'

  constructor(private httpClient: HttpClient) {
  }

  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.FLIGHTS}`);
  }

  addFlight(): Observable<void> {
    return this.httpClient.post<void>(this.FLIGHTS, {});
  }

  getFlightById(flightId: number): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.FLIGHTS}/details/${flightId}`);
  }

  getFlightParticipants(flightId: number): Observable<ReservationParticipant[]> {
    return this.httpClient.get<ReservationParticipant[]>(`${this.FLIGHTS}/participants/${flightId}`);
  }

  getAvailableFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.FLIGHTS}/available`);
  }

  delayFlight(flightId: number, delay: FlightDelay): Observable<void> {
    return this.httpClient.put<void>(`${this.FLIGHTS}/delay/${flightId}`, delay);
  }

  cancelFlight(flightId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.FLIGHTS}/cancel/${flightId}`);
  }
}
