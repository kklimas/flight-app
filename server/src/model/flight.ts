export interface AvailableFlight {
    id: string;
    airline_name: string;
    airline_iata: string;
    origin: string;
    destination: string;
    departure_date: Date;
    arrival_date: Date;
    no_available_places: number;
    base_fare: number;
    adult_fare: number;

}

export interface FlightCreationDTO {
    airline_id: string,
    departure_date: Date,
    arrival_date: Date,
    origin: string,
    destination: string,
    base_fare: number,
    adult_fare: number,
    no_total_places: number,
    no_available_places: number
}

