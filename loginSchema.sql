CREATE DATABASE IF NOT EXISTS 'budget';
USE `budget`;

CREATE TABLE IF NOT EXISTS 'accounts' (
  `id` INT ( 10 ) AUTO_INCREMENT NOT NULL,
  `username` varchar(50) NOT NULL,
   PRIMARY KEY ( `id` )
);

INSERT INTO `accounts` (`username`) VALUES ('test');