import random

import psycopg2

from util import random_dates, random_cities, random_fares, random_delay, subtract_days

flight_count = 30
reservation_count = 100
user_count = 50

conn = psycopg2.connect(
    dbname='flight_system',
    user='postgres',
    password='postgres',
    host='localhost',
    port='5432'
)


def generate_sample_flights_query():
    query = "insert into t_flight (id, airline_id, departure_date, arrival_date, origin_id, destination_id, " \
            "base_fare, adult_fare, no_total_places, no_available_places, delay) values\n"
    for i in range(1, flight_count + 1):
        airline_id = random.randint(1, 10)
        dates = random_dates()
        cities = random_cities()
        fares = random_fares()
        places = random.randint(50, 200)
        delay = random_delay()
        query += "\t({id}, {airline_id}, '{departure_date}', '{arrival_date}', '{origin_id}', '{destination_id}', {base_fare}, " \
                 "{adult_fare}, {no_total_places}, {no_available_places}, '{delay}')".format(
            id=i, airline_id=airline_id, departure_date=dates[0], arrival_date=dates[1], origin_id=cities[0],
            destination_id=cities[1], base_fare=fares[0],
            adult_fare=fares[1], no_total_places=places, no_available_places=places, delay=delay)
        if i == flight_count:
            query += ';'
        else:
            query += ',\n'
    return query


def generate_sample_reserved_flight_query():
    with conn.cursor() as cursor:
        cursor.execute("select * from t_flight")
        flights = cursor.fetchall()

    query = "insert into t_reservation (id, flight_id, date, user_id) values\n"
    for i in range(1, reservation_count + 1):
        flight_id = random.randint(1, flight_count)
        reservation_date = subtract_days(flights[flight_id - 1][2], random.randint(5, 20))
        user_id = random.randint(1, user_count)
        query += "\t({id}, {flight_id}, '{reservation_date}', {user_id})".format(id=i, flight_id=flight_id,
                                                                                 reservation_date=reservation_date,
                                                                                 user_id=user_id)
        if i == reservation_count:
            query += ';'
        else:
            query += ',\n'
    return query


def generate_reservation_status_mix_query():
    query1 = "update t_reservation set status = 'P' where id % 3 = 0"
    query2 = "update t_reservation set status = 'C' where id % 4 = 0"
    return query1, query2


USER_QUERY = """
INSERT INTO t_user (id, username, first_name, last_name, address, password, email)
VALUES
  (1, 'user1', 'John', 'Doe', '123 Main St', 'password1', 'user1@example.com'),
  (2, 'user2', 'Jane', 'Smith', '456 Elm St', 'password2', 'user2@example.com'),
  (3, 'user3', 'Alice', 'Johnson', '789 Oak St', 'password3', 'user3@example.com'),
  (4, 'user4', 'Michael', 'Brown', '567 Pine Ave', 'password4', 'user4@example.com'),
  (5, 'user5', 'Emily', 'Davis', '890 Cedar Rd', 'password5', 'user5@example.com'),
  (6, 'user6', 'Daniel', 'Wilson', '432 Oakwood Ln', 'password6', 'user6@example.com'),
  (7, 'user7', 'Sophia', 'Moore', '654 Elmwood Dr', 'password7', 'user7@example.com'),
  (8, 'user8', 'James', 'Taylor', '987 Willow St', 'password8', 'user8@example.com'),
  (9, 'user9', 'Olivia', 'Anderson', '741 Maple Ave', 'password9', 'user9@example.com'),
  (10, 'user10', 'Benjamin', 'Jackson', '369 Oak Hill', 'password10', 'user10@example.com'),
  (11, 'user11', 'Ava', 'Thomas', '852 Elmwood Ave', 'password11', 'user11@example.com'),
  (12, 'user12', 'Ethan', 'White', '123 Pine St', 'password12', 'user12@example.com'),
  (13, 'user13', 'Mia', 'Harris', '456 Cedar Rd', 'password13', 'user13@example.com'),
  (14, 'user14', 'Noah', 'Clark', '789 Oakwood Ln', 'password14', 'user14@example.com'),
  (15, 'user15', 'Charlotte', 'Lewis', '987 Elmwood Dr', 'password15', 'user15@example.com'),
  (16, 'user16', 'Liam', 'Walker', '741 Willow St', 'password16', 'user16@example.com'),
  (17, 'user17', 'Amelia', 'Hall', '369 Maple Ave', 'password17', 'user17@example.com'),
  (18, 'user18', 'Lucas', 'Young', '852 Oak Hill', 'password18', 'user18@example.com'),
  (19, 'user19', 'Harper', 'Lee', '123 Elmwood Ave', 'password19', 'user19@example.com'),
  (20, 'user20', 'Alexander', 'King', '456 Pine St', 'password20', 'user20@example.com'),
  (21, 'user21', 'Isabella', 'Adams', '789 Cedar Rd', 'password21', 'user21@example.com'),
  (22, 'user22', 'Sebastian', 'Wright', '987 Oakwood Ln', 'password22', 'user22@example.com'),
  (23, 'user23', 'Evelyn', 'Parker', '741 Elmwood Dr', 'password23', 'user23@example.com'),
  (24, 'user24', 'Jackson', 'Collins', '369 Willow St', 'password24', 'user24@example.com'),
  (25, 'user25', 'Abigail', 'Edwards', '852 Maple Ave', 'password25', 'user25@example.com'),
  (26, 'user26', 'Aiden', 'Cook', '123 Oak Hill', 'password26', 'user26@example.com'),
  (27, 'user27', 'Sofia', 'Murphy', '456 Elmwood Ave', 'password27', 'user27@example.com'),
  (28, 'user28', 'Carter', 'Rogers', '789 Pine St', 'password28', 'user28@example.com'),
  (29, 'user29', 'Scarlett', 'Hill', '987 Cedar Rd', 'password29', 'user29@example.com'),
  (30, 'user30', 'Muhammad', 'Price', '741 Oakwood Ln', 'password30', 'user30@example.com'),
  (31, 'user31', 'Layla', 'Baker', '369 Elmwood Dr', 'password31', 'user31@example.com'),
  (32, 'user32', 'Henry', 'Ross', '852 Willow St', 'password32', 'user32@example.com'),
  (33, 'user33', 'Ella', 'Turner', '123 Maple Ave', 'password33', 'user33@example.com'),
  (34, 'user34', 'Jacob', 'Phillips', '456 Oak Hill', 'password34', 'user34@example.com'),
  (35, 'user35', 'Victoria', 'Campbell', '789 Elmwood Ave', 'password35', 'user35@example.com'),
  (36, 'user36', 'David', 'Parker', '987 Pine St', 'password36', 'user36@example.com'),
  (37, 'user37', 'Penelope', 'Evans', '741 Cedar Rd', 'password37', 'user37@example.com'),
  (38, 'user38', 'Gabriel', 'Morris', '369 Oakwood Ln', 'password38', 'user38@example.com'),
  (39, 'user39', 'Chloe', 'Peterson', '852 Elmwood Dr', 'password39', 'user39@example.com'),
  (40, 'user40', 'John', 'Bell', '123 Willow St', 'password40', 'user40@example.com'),
  (41, 'user41', 'Grace', 'Watson', '456 Maple Ave', 'password41', 'user41@example.com'),
  (42, 'user42', 'Julian', 'Sanders', '789 Oak Hill', 'password42', 'user42@example.com'),
  (43, 'user43', 'Zoe', 'Price', '987 Elmwood Ave', 'password43', 'user43@example.com'),
  (44, 'user44', 'Joseph', 'Coleman', '741 Pine St', 'password44', 'user44@example.com'),
  (45, 'user45', 'Nora', 'Howard', '369 Cedar Rd', 'password45', 'user45@example.com'),
  (46, 'user46', 'Levi', 'Long', '852 Oakwood Ln', 'password46', 'user46@example.com'),
  (47, 'user47', 'Hannah', 'Foster', '123 Elmwood Dr', 'password47', 'user47@example.com'),
  (48, 'user48', 'Matthew', 'Barnes', '456 Willow St', 'password48', 'user48@example.com'),
  (49, 'user49', 'Audrey', 'Sanders', '789 Maple Ave', 'password49', 'user49@example.com'),
  (50, 'user50', 'David', 'Williams', '987 Oak Hill', 'password50', 'user50@example.com');"""

FLIGHT_CITY_QUERY = """
INSERT INTO t_flight_city (airline_code, city_code, city_name)
VALUES ('JFK', 'NYC', 'New York'),
       ('LAX', 'LAX', 'Los Angeles'),
       ('ORD', 'CHI', 'Chicago'),
       ('LHR', 'LON', 'London'),
       ('CDG', 'PAR', 'Paris'),
       ('FRA', 'FRA', 'Frankfurt'),
       ('DXB', 'DXB', 'Dubai'),
       ('SIN', 'SIN', 'Singapore'),
       ('PEK', 'BJS', 'Beijing'),
       ('SYD', 'SYD', 'Sydney');"""

AIRLINE_QUERY = """
INSERT INTO t_airline (id, name, iata, country)
VALUES
    (1, 'United Airlines', 'UA', 'United States'),
    (2, 'American Airlines', 'AA', 'United States'),
    (3, 'Delta Air Lines', 'DL', 'United States'),
    (4, 'British Airways', 'BA', 'United Kingdom'),
    (5, 'Air France', 'AF', 'France'),
    (6, 'Lufthansa', 'LH', 'Germany'),
    (7, 'Emirates', 'EK', 'United Arab Emirates'),
    (8, 'Singapore Airlines', 'SQ', 'Singapore'),
    (9, 'Air China', 'CA', 'China'),
    (10, 'Qantas Airways', 'QF', 'Australia');"""


def written_queries():
    return [USER_QUERY, FLIGHT_CITY_QUERY, AIRLINE_QUERY]
