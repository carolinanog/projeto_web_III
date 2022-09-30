DROP TABLE IF EXISTS cars;

CREATE TABLE cars(
marca VARCHAR(15) PRIMARY KEY,
modelo  VARCHAR(50) NOT NULL,
ano INTEGER(4) NOT NULL,
valor FLOAT(50) NOT NULL,
cor VARCHAR(20) NOT NULL,
cambio VARCHAR(20) NOT NULL,
imagem VARCHAR(65) NOT NULL
);

SELECT * FROM cars

INSERT INTO cars(marca, modelo, ano, valor, cor, cambio, imagem) VALUES ("Ford", "Focus", "2020", "26.799", "azul", "manual","fordfocus2020.jpeg")