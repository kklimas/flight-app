export interface Flight {
  id: string;
  airline_id: number;
  name: string;
  origin_city: string;
  destination_city: string;
  status: FlightStatus,
  departure_date: string;
  arrival_date: string;
  delay: FlightDelay;
  no_available_places: number;
  base_fare: number;
  adult_fare: number;
}

export class FlightDelay {
  days = 0;
  hours = 0;
  minutes = 0


  constructor(days: number, hours: number, minutes: number) {
    this.days = this.replaceUndefined(days);
    this.hours = this.replaceUndefined(hours);
    this.minutes = this.replaceUndefined(minutes);
  }

  private replaceUndefined(val1: number | undefined) {
    return val1 !== undefined ? val1: 0;
  }

  toString(): string {
    return `${this.days} days ${this.hours} hours ${this.minutes} mins`
  }
}

export enum FlightStatus {
  ACTIVE, DELAYED, CANCELED
}
