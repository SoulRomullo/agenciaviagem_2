use agencia_viagem;


SELECT * FROM cliente;

SELECT * FROM cupom;

CREATE TABLE cliente (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    endereco VARCHAR(40) NOT NULL,
    telefone VARCHAR(14) NOT NULL,
    cod_cupom INT
);

CREATE TABLE cupom (
	codigo INT PRIMARY KEY, 
	cupom VARCHAR(10),
    estado VARCHAR(40),
    valor DOUBLE,
    data_viagem DATE
);

ALTER TABLE cliente ADD CONSTRAINT fk_cod_cupom
FOREIGN KEY(cod_cupom)
REFERENCES cupom(codigo);


INSERT INTO cupom VALUES(001,'abc01','Rio de Janeiro', 1200, null);
INSERT INTO cupom VALUES(002,'abc02','Brasília', 1800, null);
INSERT INTO cupom VALUES(003,'abc03','Fortaleza', 2800, null);
INSERT INTO cupom VALUES(004,'abc04','Macéio', 2500, null);
INSERT INTO cupom VALUES(005,'abc05','Pernambuco', 2700, null);
INSERT INTO cupom VALUES(006,'abc06','São Paulo', 1900, null);


SELECT cliente.nome, cliente.cpf, cupom.cupom, cupom.estado, cupom.valor, cupom.data_viagem
FROM cliente
INNER JOIN cupom
ON cliente.cod_cupom = cupom.codigo;

