insert into t_user(id, username, password, email)
VALUES ('78ee0a9a-46e3-4471-bcc3-87edd14393e3', 'user_01', 'custom-password', 'kwq@asdas.pl');
insert into t_user(id, username, password, email)
VALUES ('80c7a974-8c69-4ee7-a8b2-27bce7551ced', 'user_02', 'sample-password', 'poggu@pogchampito.com');

insert into t_airline(id, name, iata, country)
values ('a8e8f4e9-a234-48bd-862e-e37310da9828', 'Qatar Airlines', 'QE', 'Qatar');
insert into t_airline(id, name, iata, country)
values ('41666989-7f71-4697-880c-4a02aff39465', 'Fly Europa', 'ER', 'Spain');
insert into t_airline(id, name, iata, country)
values ('08ccf376-a721-43c1-8017-97100eb519f1', 'Centralwings', 'C0', 'Poland');
insert into t_airline(id, name, iata, country)
values ('5a249847-bfdf-4604-8bd4-5a02bcb91362', 'Central Skyport', '', 'United States');
insert into t_airline(id, name, iata, country)
values ('2233c558-0292-4d47-aa56-294a81b6aff8', 'Central European Airlines', '', 'Czech Republic');

insert into t_flight (id, airline_id, departure_date, arrival_date, origin, destination, base_fare, adult_fate,
                      no_total_places, no_available_places)
values ('4b6614dd-029f-4974-93c7-addbb780c98f', '08ccf376-a721-43c1-8017-97100eb519f1', '2023-04-30T07:00',
        '2023-04-30T11:55', 'WAW', 'PRG', 100, 25,
        50, 50);
insert into t_flight (id, airline_id, departure_date, arrival_date, origin, destination, base_fare, adult_fate,
                      no_total_places, no_available_places)
values ('99dabdea-8296-494c-a1c8-9a023a984119', '08ccf376-a721-43c1-8017-97100eb519f1', '2023-05-01T07:00',
        '2023-05-01T12:00', 'WAW', 'SOF', 120, 25,
        100, 100);
insert into t_flight (id, airline_id, departure_date, arrival_date, origin, destination, base_fare, adult_fate,
                      no_total_places, no_available_places)
values ('9d4f9abc-b429-4499-a2d9-efea48e7f968', '08ccf376-a721-43c1-8017-97100eb519f1', '2023-05-03T07:00',
        '2023-05-03T13:30', 'WAW', 'AMS', 150, 25,
        75, 75);
insert into t_flight (id, airline_id, departure_date, arrival_date, origin, destination, base_fare, adult_fate,
                      no_total_places, no_available_places)
values ('da0d85e5-826b-43c2-a9f1-787477e15f36', '08ccf376-a721-43c1-8017-97100eb519f1', '2023-05-26T08:30',
        '2023-05-26T14:30', 'WAW', 'OTP', 160, 25,
        50, 50);

insert into t_reserved_flight (flight_id, user_id)
VALUES ('4b6614dd-029f-4974-93c7-addbb780c98f', '80c7a974-8c69-4ee7-a8b2-27bce7551ced');
insert into t_reserved_flight (flight_id, user_id)
VALUES ('99dabdea-8296-494c-a1c8-9a023a984119', '80c7a974-8c69-4ee7-a8b2-27bce7551ced');
insert into t_reserved_flight (flight_id, user_id)
VALUES ('9d4f9abc-b429-4499-a2d9-efea48e7f968', '78ee0a9a-46e3-4471-bcc3-87edd14393e3');
insert into t_reserved_flight (flight_id, user_id)
VALUES ('da0d85e5-826b-43c2-a9f1-787477e15f36', '78ee0a9a-46e3-4471-bcc3-87edd14393e3');