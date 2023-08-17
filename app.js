const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;

    if(url === '/home'){
        res.write('<h1>welcome home</h1>');
    }
    if(url === '/about'){
        res.write('<h1>Welcome to About Us page</h1>');
    }
    if(url === '/node'){
        res.write('<h1>Welcome to my Node Js project</h1>');
    }
});

server.listen(4000);