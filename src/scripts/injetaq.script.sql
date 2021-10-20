create database injetaq;

use injetaq;

create table cliente (
	cliente_id int auto_increment primary key,
    nome varchar(50) not null,
    ativo boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table setor (
	setor_id int auto_increment primary key,
    nome varchar(50) not null,
    ativo boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table usuario (
	usuario_id int auto_increment primary key,
    nome varchar(50) not null,
    email varchar(50) not null unique,
    senha varchar(20) not null,
    setor_id int not null,
    foreign key (setor_id) references setor(setor_id),
    ativo boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table situacao (
	situacao_id int auto_increment primary key,
    nome varchar(20) not null,
    ativo boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table tipo_di (
	tipo_di_id int auto_increment primary key,
    descricao varchar(30) not null,
    ativo boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table di (
	di_id int auto_increment unique,
    di int primary key,
    os varchar(10),
    numero_pedido varchar(20) not null,
    numero_orcamento varchar(10),
    descricao varchar(255) not null,
    numero varchar(20),
    op varchar(20),
    nome_peca varchar(255),
    numero_peca varchar(50),
    cliente_id int not null,
    foreign key(cliente_id) references cliente(cliente_id),
    inicio date not null,
    prazo date not null,
    andamento numeric,
    data_atualizacao date,
    tipo_di_id int not null,
    foreign key (tipo_di_id) references tipo_di(tipo_di_id),
    situacao_id int not null,
    foreign key (situacao_id) references situacao(situacao_id),
    entrega date,
    createdAt datetime,
    updatedAt datetime
);

create table di_setor (
	di_setor_id int auto_increment primary key,
    di int not null,
    foreign key(di) references di(di),
    setor_id int not null,
    createdAt datetime,
    updatedAt datetime
);

create table operacao (
	operacao_id int auto_increment primary key,
    operacao varchar(30) not null,
    custo_operacao numeric not null,
    ativo boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table di_operacao (
	di_operacao_id int auto_increment primary key,
    di int not null,
    foreign key (di) references di(di),
    operacao_id int not null,
    foreign key (operacao_id) references operacao(operacao_id),
    qtde_horas numeric not null,
    custo_operacao numeric not null,
    createdAt datetime,
    updatedAt datetime
);


