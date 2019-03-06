USE bnvlxxeiyqouvuwsye9r;

CREATE TABLE IF NOT EXISTS users(
    ID              INT(11) AUTO_INCREMENT NOT NULL,
    First_name      VARCHAR(100),
    Last_name       VARCHAR(100),
    Username        VARCHAR(100),
    Password        VARCHAR(255),
    CONSTRAINT pk_users PRIMARY KEY(ID)
)ENGINE='InnoDb';