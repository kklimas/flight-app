import os

import psycopg2

from src.queries import written_queries, generate_sample_flights_query, generate_sample_reserved_flight_query, \
    generate_reservation_status_mix_query

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
    execute_query(generate_reservation_status_mix_query()[0])
    execute_query(generate_reservation_status_mix_query()[1])
