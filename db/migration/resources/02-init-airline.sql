create table t_airline
(
    id      int generated by default as identity
        primary key,
    name    varchar(50) not null
        unique,
    iata    varchar(5),
    country varchar(50)
);