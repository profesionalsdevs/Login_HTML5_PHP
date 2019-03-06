CREATE DATABASE IF NOT EXISTS projects_tests CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE projects_tests;

CREATE TABLE IF NOT EXISTS users(
    ID              INT(11) AUTO_INCREMENT NOT NULL,
    First_name      VARCHAR(100),
    Last_name       VARCHAR(100),
    Username        VARCHAR(100),
    Password        VARCHAR(255),
    CONSTRAINT pk_users PRIMARY KEY(ID)
)ENGINE='InnoDb';