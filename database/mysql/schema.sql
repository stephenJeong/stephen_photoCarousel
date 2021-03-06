DROP DATABASE photoCarousel;

CREATE DATABASE IF NOT EXISTS photoCarousel;

USE photoCarousel;

DROP TABLE IF EXISTS games;

-- this is one block of code:
CREATE TABLE games (
  game_id INT NOT NULL AUTO_INCREMENT,
  game_name VARCHAR(100) NOT NULL,
  images TEXT NOT NULL,
  PRIMARY KEY (game_id)
)
PARTITION BY RANGE (game_id) (
  PARTITION p0 VALUES LESS THAN (1000000),
  PARTITION p1 VALUES LESS THAN (2000000),
  PARTITION p2 VALUES LESS THAN (3000000),
  PARTITION p3 VALUES LESS THAN (4000000),
  PARTITION p4 VALUES LESS THAN (5000000),
  PARTITION p5 VALUES LESS THAN (6000000),
  PARTITION p6 VALUES LESS THAN (7000000),
  PARTITION p7 VALUES LESS THAN (8000000),
  PARTITION p8 VALUES LESS THAN (9000000),
  PARTITION p9 VALUES LESS THAN (10000000),
  PARTITION p10 VALUES LESS THAN (11000000)
);