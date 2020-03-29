const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// // faz com que apenas o endereço abaixo possa acessar o backend
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.listen(3333);