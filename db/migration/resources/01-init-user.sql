create table t_user
(
    id         int generated by default as identity
        primary key,
    username   varchar(50)  not null
        unique,
    first_name varchar(50),
    last_name  varchar(50),
    address    varchar(50),
    password   text         not null,
    email      varchar(255) not null
        unique,
    created_on timestamp default CURRENT_DATE
);