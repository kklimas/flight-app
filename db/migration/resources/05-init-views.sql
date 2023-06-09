create or replace view available_flights as
select tf.id,
       ta.name,
       t1.city_name as origin,
       t2.city_name as destination,
       tf.departure_date,
       tf.arrival_date,
       tf.delay,
       tf.no_available_places,
       tf.base_fare,
       tf.adult_fare
from t_flight tf
         inner join t_airline ta on tf.airline_id = ta.id
         inner join t_flight_city t1 on tf.origin_id = t1.airline_code
         inner join t_flight_city t2 on tf.destination_id = t2.airline_code
where tf.no_available_places > 0
  and tf.departure_date > current_date;