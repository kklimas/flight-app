create table t_payment_log
(
    id             int generated by default as identity primary key,
    reservation_id int,
    date           timestamp                                        default current_timestamp,
    type           VARCHAR(7) CHECK (type IN ('INCOME', 'OUTCOME')) DEFAULT 'INCOME',
    account_number varchar(50)                                      default substring(md5(random()::text), 1, 10),
    amount         numeric(10, 2),
    constraint fk_reservation foreign key (reservation_id) references t_reservation (id)
);