export interface ReservationCreationDTO {
    flight_id: string;
    booking_party_id: string;
    participants: ReservationParticipant[]
}

interface ReservationParticipant {
    first_name: string;
    last_name: string;
    is_adult: boolean;
}