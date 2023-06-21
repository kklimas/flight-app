# Backend
Backend opiera się na Node JS oraz Express. Aby go uruchomić należy z linii komend wpisać ``npm start`` będąc w folderze `/server`

## Endpoints
Poniżej wylistowane są dostępne endpointy pod które można kierować requesty
 - `/flights`
   - GET - pobranie wszystkich lotów
   - POST - dodanie nowego lotu
   ```json
    {
       "airline_id": 1,
       "departure_date": "2023-07-28 08:14:00",
       "arrival_date": "2023-07-28 09:16:00",
       "delay": {},
       "origin_id": "LAX",
       "destination_id": "FRA",
       "base_fare": 450,
       "adult_fare": 100,
       "no_total_places": 75
   }
   ```
    - GET `/details/:id` - pobranie informacji szczegółowych danych na temat danego lotu
    - GET `/participants/:id` - pobranie informacji na temat uczestników danego lotu
    - GET `/available` - dane na temat dostępnych lotów
    - PUT `/delay/:id` - opóźnienie lotu
      ```json
      {
        "hours": 2,
        "minutes": 30   
      }
      ```
    - DELETE `/cancel/:id` - cancel lotu
 
 
 - `/reservation`
   - GET - wszystkie rezerwacje
   - POST - dodanie rezerwacji
   ```json
   {
    "flight_id": 5,
    "booking_party_id": 2,
    "participants": [
        {
            "first_name": "Kacper",
            "last_name": "Klimas",
            "is_adult": true
        }
    ]
   }
   ```
    - GET `/:id` - szczegółowe dane na temat wybranej rezerwacji
    - PUT `/payment/:id` - opłacenie wybranej rezerwacji
    - DELETE `/cancel/:id` - odwołanie rezerwacji
 - `/operation`
   - GET - pobranie logów dotyczących rezerwacji
   - GET `/user:id` - pobranie logów rezerwacji danego użytkownika
   - GET `/payments` - pobranie logów dotyczących płatności (income lub outcome)