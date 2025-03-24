CREATE DATABASE coffee_house_db;

USE coffee_house_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    image_url VARCHAR(255)
);

INSERT INTO products (name, description, price, image_url)
VALUES ('Cà phê Sữa', 'Một ly cà phê sữa ngon tuyệt.', 40000, 'coffee.jpg');
