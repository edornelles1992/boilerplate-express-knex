# Job Quest API

## Documentação
Git: https://git-scm.com/doc <br>
Node.js: https://nodejs.org/en/docs/ <br>
KnexJS: http://knexjs.org/ <br>

## Pré-requisitos
Git: https://git-scm.com/ <br>
Node.js: https://nodejs.org/en/ <br>
MySQL: https://www.mysql.com/ <br>

## Banco de Dados
Database: job_quest  <br>
usuario: root  <br>
senha: (sem senha)  <br>

## Instalação
```
git clone https://tools.ages.pucrs.br/job-quest/api
cd API
git checkout dev
npm install
npm start

OBS: Antes de rodar a API tenha o banco de dados MySQL rodando no seu ambiente local.
```

## Scripts BD
```
migrations e seeds estão inclusos no projeto

O Schema e as tabelas e inserts iniciais são criados ao subir a API
todas as tabelas e registros novos criados que sejam de carga inicial
devem ser incluidos nos arquivos de migrations e/ou seeds e adicionados
no script contido no index da pasta database do projeto!

O projeto também contem os scripts para rodar manualmente:
database/banco.sql
```

