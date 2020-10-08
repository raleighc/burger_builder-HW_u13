DROP DATABASE IF EXISTS `burgers_db`;

CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE `allcharacters` (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY ( `id` )
);
