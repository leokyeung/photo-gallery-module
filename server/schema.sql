DROP DATABASE IF EXISTS lemonloft;

CREATE DATABASE if not exists lemonloft;

use lemonloft;

CREATE TABLE listings (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(200) NOT NULL
);

CREATE TABLE listing_images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(200) NOT NULL,
    image_info VARCHAR(100),
    listing_id int NOT NULL,
    CONSTRAINT `fk_listing_image` FOREIGN KEY (listing_id)
    REFERENCES listings(id) ON DELETE CASCADE
);