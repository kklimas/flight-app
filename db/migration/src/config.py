import psycopg2

conn = psycopg2.connect(
    dbname='flight_system',
    user='postgres',
    password='postgres',
    host='localhost',
    port='5432'
)