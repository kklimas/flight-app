create table t_user
(
    id         uuid      default gen_random_uuid() not null
        primary key,
    username   varchar(50)                         not null
        unique,
    password   text                                not null,
    email      varchar(255)                        not null
        unique,
    created_on timestamp default CURRENT_DATE
);

create table t_airline
(
    id      uuid default gen_random_uuid() not null
        primary key,
    name    varchar(50)                    not null
        unique,
    iata    varchar(5),
    country varchar(50)
);

create table t_flight
(
    id                  uuid default gen_random_uuid() not null
        primary key,
    airline_id          uuid
        constraint fk_airline
            references t_airline,
    departure_date      date,
    arrival_date        date,
    origin              varchar(50),
    destination         varchar(50),
    base_fare           integer,
    adult_fare          integer,
    no_total_places     integer,
    no_available_places integer
);

create table t_reserved_flight
(
    id                 uuid default gen_random_uuid() not null
        primary key,
    flight_id          uuid
        constraint fk_flight
            references t_flight,
    reservation_date   date default CURRENT_DATE,
    reservation_status char default 'N',
    user_id            uuid
        constraint fk_user
            references t_user
);
