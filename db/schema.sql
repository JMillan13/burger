-- Drops the burgers_db if it exists currently --
-- DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger_db" database --
-- CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affectburgers_db --
USE er1lafzhaaol9p4n;

-- Creates the table "people" within burgers_db --
CREATE TABLE burgers (

  id INTEGER NOT NULL AUTO_INCREMENT,

  burger_name VARCHAR(100) NOT NULL,

  devoured BOOLEAN NOT NULL,

  PRIMARY KEY (id)
);
