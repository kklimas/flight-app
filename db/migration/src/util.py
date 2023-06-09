import random
import time
from datetime import datetime, timedelta

datetime_format = '%Y-%m-%d %H:%M'
start_date = '2023-06-10 1:30'
end_date = '2023-08-10 1:30'

city_airline_codes = ['JFK', 'LAX', 'ORD', 'LHR', 'CDG', 'FRA', 'DXB', 'SIN', 'PEK', 'SYD']


def str_time_prop(start, end, prop):
    stime = time.mktime(time.strptime(start, datetime_format))
    etime = time.mktime(time.strptime(end, datetime_format))

    ptime = stime + prop * (etime - stime)

    return time.strftime(datetime_format, time.localtime(ptime))


def random_date(start, end, prop):
    return str_time_prop(start, end, prop)


def random_dates():
    departure_date = random_date(start_date, end_date, random.random())
    arrival_date = random_date(departure_date, add_hours(departure_date, 12), random.random())
    return departure_date, arrival_date


def add_hours(date, hours_bound):
    dt = datetime.strptime(date, datetime_format)
    hours = random.randint(1, hours_bound)
    return str(dt + timedelta(hours=hours))[:-3]


def subtract_days(date, days):
    return str(date - timedelta(days=days))


def random_cities(index1=0, index2=0):
    if index1 == index2:
        index1 = random.randint(0, len(city_airline_codes) - 1)
        index2 = random.randint(0, len(city_airline_codes) - 1)
        return random_cities(index1, index2)
    return city_airline_codes[index1], city_airline_codes[index2]


def random_fares():
    base_fare = random.randint(300, 1500)
    return base_fare, round(base_fare * 0.2)


def random_delay():
    chance = random.randint(1, 10)
    if chance < 8:
        return '0 days'
    return generate_delay()


def generate_delay():
    hours = random.randint(0, 24)
    minutes = random.randint(0, 59)
    seconds = random.randint(0, 59)
    return f'{hours} hours {minutes} minutes {seconds} seconds'
