DROP DATABASE chat;
CREATE DATABASE chat;
USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  username_id integer NOT NULL auto_increment PRIMARY KEY ,
  username varchar(35) NOT NULL
);

CREATE TABLE rooms (
  room_id integer NOT NULL auto_increment PRIMARY KEY,
  roomname varchar(35) NOT NULL
);

CREATE TABLE message (
  messages_id integer NOT NULL auto_increment PRIMARY KEY,
  messages text NOT NULL,
  
  username_id integer NOT NULL,
  FOREIGN KEY fk_username(username_id) REFERENCES users(username_id) ON UPDATE CASCADE ON DELETE RESTRICT,
  
  room_id integer NOT NULL,
  FOREIGN KEY fk_room(room_id) REFERENCES rooms(room_id) ON UPDATE CASCADE ON DELETE RESTRICT
);







/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

