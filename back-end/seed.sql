CREATE DATABASE IF NOT EXISTS trybeer;

USE trybeer;

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(30),
    name VARCHAR(100) NOT NULL,
    role VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Products (
    product_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    product_price FLOAT NOT NULL,
    picture VARCHAR(300) NOT NULL,
    PRIMARY KEY(product_id)
);

CREATE TABLE Orders (
    order_id INT NOT NULL AUTO_INCREMENT,
    delivered BOOLEAN NOT NULL,
    street VARCHAR(30) NOT NULL,
    street_number INT NOT NULL,
    order_date DATE NOT NULL,
    client_id INT NOT NULL,
    PRIMARY KEY(order_id),
    FOREIGN KEY (client_id) REFERENCES Users(id)
);

CREATE TABLE Order_Products (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    quantity FLOAT NOT NULL,
    order_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

INSERT INTO Users (email, password, name, role)
VALUES
    ('folgado@gmail.com', '123456', 'Folgado', 'client'),
    ('gi@gmail.com', '123456', 'Gi', 'client'),
    ('pedro@gmail.com', '123456', 'Pedro', 'client'),
    ('tryber@gmail.com', '123456', 'Tryber', 'admin'),
    ('roz@wpp.com', '123456', 'Roz', 'admin');
    
    
INSERT INTO Products (product_name, product_price, picture)
VALUES
    ('Skol Lata 350ml', '2.20', 'http://localhost:3001/images/Skol Lata 350ml.jpg'),
    ('Heineken 600ml', '7.50', 'http://localhost:3001/images/Heineken 600ml.jpg'),
    ('Antarctica Pilsen 300ml', '2.49', 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg'),
    ('Brahma 600ml', '7.50', 'http://localhost:3001/images/Brahma 600ml.jpg'),
    ('Skol 269ml', '2.19', 'http://localhost:3001/images/Skol 269ml.jpg'),
    ('Skol Beats Senses 313ml', '4.49', 'http://localhost:3001/images/Skol Beats Senses 313ml.jpg'),
    ('Becks 330ml', '4.99', 'http://localhost:3001/images/Becks 330ml.jpg'),
    ('Brahma Duplo Malte 350ml', '2.79', 'http://localhost:3001/images/Brahma Duplo Malte 350ml'),
    ('Becks 600ml', '8.89', 'http://localhost:3001/images/Becks 600ml'),
    ('Skol Beats Senses 269ml', '3.57', 'http://localhost:3001/images/Skol Beats Senses 269ml'),
    ('Stella Artois 275ml', '3.49', 'http://localhost:3001/images/Stella Artois 275ml');
    
INSERT INTO Orders (delivered, street, street_number, order_date, client_id)
VALUES
    (TRUE, 'Rua 1', 22, '2019-04-15', 2),
    (TRUE, 'Rua 2', 820, '2019-07-15', 3),
    (FALSE, 'Rua 3', 52, '2019-02-15', 3);
    
INSERT INTO Order_Products (product_id, quantity, order_id) 
VALUES
    (1, 2, 1),
    (1, 6, 2),
    (1, 3, 3),
    (3, 4, 1),
    (4, 1, 1),
    (5, 1, 2),
    (5, 2, 3);
