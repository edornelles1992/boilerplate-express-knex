# Job Quest API

## Documentação
Git: https://git-scm.com/doc <br>
Node.js: https://nodejs.org/en/docs/ <br>
KnexJS: http://knexjs.org/ <br>

## Pré-requisitos
Git: https://git-scm.com/ <br>
Node.js: https://nodejs.org/en/ <br>
MySQL: https://www.mysql.com/ <br>

Database: job_quest  <br>
usuario: root  <br>
senha: (sem senha)  <br>

## Instalação
```
git clone https://tools.ages.pucrs.br/job-quest/API/
cd API
npm install
npm start
```

## Scripts BD
migrations e seeds estão inclusos no projeto, utilize:<br>

npx knex migrate:latest - irá criar as tabelas tabelas <br>
npx knex seed:run - inserts tabelas <br>

O projeto também contem os scripts para rodar manualmente: <br>
database/banco.sql

