// const express = require('express');

// const app = express();
// app.use(express.json());

// /**
//  * Rota / Recurso
//  */

// /**
//  * Métodos HTTP:
//  * 
//  * GET: Buscar uma informação do back-end
//  * POST: Criar uma informação no back-end
//  * PUT: Alterar uma informação no back-end
//  * DELETE: Excluir uma informação no back-end
//  */

// /**
//  * Tipos de parâmetros:
//  * 
//  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
//  * http://localhost:3333/users?page=2&name=Diego&idade=25
//  * 
//  * Route Params: Parâmetros utilizados para identificar recursos
//  * http://localhost:3333/users/1
//  * 
//  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
//  */

// /**
//  * Tipos de bancos de dados:
//  * 
//  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
//  * NoSQL: MongoDB, CouchDB, etc.
//  */

// /**
//  * Comunicação com o banco de dados:
//  * 
//  * Driver: SELECT * FROM users
//  * Query Builder: table('users').select('*').where()
//  */

// app.post('/users', (request, response) => {
//     // const params = request.query; // Query
//     // const params = request.params; // Route
//     const body = request.body;

//     console.log(body);

//     //return response.send('Hello World!');
//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Gabriel Morais'
//     }); 
// });

// app.listen(3333);
