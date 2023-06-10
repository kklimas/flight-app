create or replace view flights as
select tf.id,
       ta.id as airline_id,
       ta.name,
       t1.city_name as origin_city,
       t2.city_name as destination_city,
       tf.status,
       tf.departure_date,
       tf.arrival_date,
       tf.delay,
       tf.no_available_places,
       tf.base_fare,
       tf.adult_fare
from t_flight tf
         inner join t_airline ta on tf.airline_id = ta.id
         inner join t_flight_city t1 on tf.origin_id = t1.airline_code
         inner join t_flight_city t2 on tf.destination_id = t2.airline_code;

create or replace view available_flights as
select tf.id,
       ta.id as airline_id,
       ta.name,
       t1.city_name as origin_city,
       t2.city_name as destination_city,
       tf.status,
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

create or replace view payment_transactions as
select t.id, t.reservation_id, t.type, t.amount, t.date, tu.username, t.account_number
from t_payment_log t
         inner join t_reservation tr on tr.id = t.reservation_id
         inner join t_user tu on tu.id = tr.booking_party_id;

create or replace view reservations as
select tr.id,
       tf.id as flight_id,
       tr.date        as reservation_date,
       tr.status,
       tu.username    as booking_party_username,
       tr.participants_number,
       tf.departure_date,
       tf.arrival_date,
       tf.delay,
       tfc1.city_name as origin_city,
       tfc2.city_name as destination_city
from t_reservation tr
         inner join t_user tu on tu.id = tr.booking_party_id
         inner join t_flight tf on tf.id = tr.flight_id
         inner join t_flight_city tfc1 on tfc1.airline_code = tf.origin_id
         inner join t_flight_city tfc2 on tfc2.airline_code = tf.destination_id