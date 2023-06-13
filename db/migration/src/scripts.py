import os

from config import conn
from queries import written_queries, generate_sample_flights_query, generate_sample_reserved_flight_query, \
    generate_paid_reservations, generate_sample_reservation_participant, generate_canceled_reservations, delay_flights


def execute_scripts_from_dir(directory):
    files = os.listdir(directory)
    files.sort()
    for file in files:
        execute_scripts_from_file(directory + "/" + file)


def execute_scripts_from_file(filename):
    with open(filename, 'r') as fd:
        sql_file = fd.read()

    with conn.cursor() as cursor:
        for command in sql_file.split('\n\n'):
            if command != '':
                print(command)
                cursor.execute(command)
        conn.commit()


def execute_query(query):
    with conn.cursor() as cursor:
        cursor.execute(query)
        conn.commit()


def generate_tables():
    execute_scripts_from_dir('resources')


def generate_sample_data():
    for query in written_queries():
        execute_query(query)
    execute_query(generate_sample_flights_query())
    execute_query(generate_sample_reserved_flight_query())
    generate_sample_reservation_participant()
    generate_paid_reservations()
    generate_canceled_reservations()
    delay_flights()
