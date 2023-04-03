create or replace view available_flights as
select tf.id,
       ta.name,
       ta.iata,
       tf.origin,
       tf.destination,
       tf.departure_date,
       tf.arrival_date,
       tf.no_available_places,
       tf.base_fare,
       tf.adult_fare
from t_flight tf
         inner join t_airline ta on tf.airline_id = ta.id
where tf.no_available_places > 0
  and tf.departure_date > current_date;