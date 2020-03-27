const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

//métodos HTTP: GET, PUT, POST, DELETE.




app.listen(3333);

