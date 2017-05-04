const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
server.listen(5000);

var counter = 0;

app.use(express.static('./public/'));

app.get('/', (req, res) => res.end('Gracias por su visita'));

app.get('/counter', (req, res) => res.end((counter++).toString()));

app.get('/currentTime', (req, res) => res.send(new Date().toString()));

// app.get('/echo', (req, res) => res.send(req.));
