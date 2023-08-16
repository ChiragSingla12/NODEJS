const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('My name is chirag');
});

server.listen(4000);