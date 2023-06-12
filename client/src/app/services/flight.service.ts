import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../models/flight.model";

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

  getAvailableFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.FLIGHTS}/available`);
  }
}
