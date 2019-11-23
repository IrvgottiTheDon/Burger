CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (id int auto_increment primary key, 
burgers_name varchar(255), 
devoured boolean default 0,
date TIMESTAMP
primary key (id) );