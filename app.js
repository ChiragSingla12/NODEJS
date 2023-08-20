const http = require('http');

const express = require('express');

const app = express();

//middleware1
app.use((req, res, next) => {
    console.log('In middleware one');
    next();
});

//middleware2
app.use((req, res, next) => {
    console.log('In middleware two');
    res.send('<h1> Hello from express</h1>')
});

const server = http.createServer(app);

app.listen(3000);