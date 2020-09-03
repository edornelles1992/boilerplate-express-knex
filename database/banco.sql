CREATE TABLE `usuario` (
  `id_usuario` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(300) NOT NULL,
  `perfil` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO job_quest.usuario
(id_usuario, nome, email, senha, perfil, created_at, updated_at)
VALUES(1, 'admin', 'admin@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 1, '2020-09-03 02:07:53', '2020-09-03 02:07:53');
INSERT INTO job_quest.usuario
(id_usuario, nome, email, senha, perfil, created_at, updated_at)
VALUES(2, 'Joao Silva', 'joao@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 2, '2020-09-03 02:07:53', '2020-09-03 02:07:53');
INSERT INTO job_quest.usuario
(id_usuario, nome, email, senha, perfil, created_at, updated_at)
VALUES(3, 'Maria Flores', 'maria@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 2, '2020-09-03 02:07:53', '2020-09-03 02:07:53');
INSERT INTO job_quest.usuario
(id_usuario, nome, email, senha, perfil, created_at, updated_at)
VALUES(4, 'Paulo Neves', 'paulo@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 2, '2020-09-03 02:07:53', '2020-09-03 02:07:53');
INSERT INTO job_quest.usuario
(id_usuario, nome, email, senha, perfil, created_at, updated_at)
VALUES(5, 'tetete', 'eeee@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 1, '2020-09-03 02:16:24', '2020-09-03 02:18:36');
