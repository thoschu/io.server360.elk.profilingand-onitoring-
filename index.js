// const appmetrics = require('appmetrics'),
//     http = require('http');
//
// const monitoring = appmetrics.monitor();
//
// monitoring.on('memory', (data) => console.log(data));
//
// const server = http.createServer((req, res) => {
//     res.end('Hello Client');
// });
//
// server.listen(8080);

const express = require('express');
const dash = require('appmetrics-dash').monitor();
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(8080);
