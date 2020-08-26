DROP USER IF EXISTS 'orkse'@'%';
CREATE USER 'orkse'@'%' IDENTIFIED BY '123';
DROP USER IF EXISTS 'urukhai'@'%';
CREATE USER 'urukhai'@'%' IDENTIFIED BY 'sodom';
DROP USER IF EXISTS 'saruman'@'%';
CREATE USER 'saruman'@'%' IDENTIFIED BY 'urusai_chigai';
DROP USER IF EXISTS 'sauron'@'%';
CREATE USER 'sauron'@'%' IDENTIFIED BY 'ONE_TO_RULE_THEM_ALL';

DROP DATABASE IF EXISTS orks_db;
CREATE DATABASE orks_db;
USE orks_db;
CREATE TABLE info (id INT AUTO_INCREMENT NOT NULL, nachricht VARCHAR(255) NOT NULL, PRIMARY KEY id);
INSERT INTO info (nachricht) VALUES ('Orkse stinken'), ('Hier gibt es nichts zu sehen');

GRANT SELECT ON orks_db.* TO 'orkse'@'%';
GRANT SELECT ON orks_db.* TO 'urukhai'@'%';
GRANT ALL ON orks_db.* TO 'saruman'@'%';
GRANT SELECT, INSERT ON orks_db.* TO 'sauron'@'%';

DROP DATABASE IF EXISTS kerkerdaten;
CREATE DATABASE kerkerdaten;
USE kerkerdaten;

CREATE TABLE kerker (id INT NOT NULL, tuer_zustand ENUM('offen','verschlossen') DEFAULT 'verschlossen', PRIMARY KEY (id));
INSERT INTO kerker (id) VALUES (1), (2), (3), (10), (11), (12), (13);

CREATE TABLE belegung (id INT NOT NULL, insasse VARCHAR(20) NOT NULL, kerker_id INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (kerker_id) REFERENCES kerker(id)); 

INSERT INTO belegung (id, insasse, kerker_id) VALUES (1000, "Böser Wicht", 2); 
INSERT INTO belegung (id, insasse, kerker_id) VALUES (1001, "Totesser", 10); 
INSERT INTO belegung (id, insasse, kerker_id) VALUES (42, "Amalya", 3); 
INSERT INTO belegung (id, insasse, kerker_id) VALUES (1002, "Troll Gondol", 12); 
INSERT INTO belegung (id, insasse, kerker_id) VALUES (1003, "Feuerdrache", 11); 

GRANT SELECT ON kerkerdaten.* TO 'urukhai'@'%';
GRANT SELECT, UPDATE ON kerkerdaten.* TO 'saruman'@'%';
GRANT SELECT, INSERT ON kerkerdaten.* TO 'sauron'@'%';

DELIMITER $$
CREATE TRIGGER after_kerker_update
AFTER UPDATE ON kerker 
FOR EACH ROW
BEGIN
  IF (NEW.tuer_zustand = "offen" AND NEW.id = 3)
    THEN 
      SIGNAL SQLSTATE '45000' 
      SET MESSAGE_TEXT = "Congrats, you would have saved the Princess!";

  ELSEIF (NEW.tuer_zustand = "offen")
    THEN 
     SIGNAL SQLSTATE '45000' 
      SET MESSAGE_TEXT = "Ohh no, you would have released the monsters :P";
  END IF;
  
END $$

DELIMITER ;


