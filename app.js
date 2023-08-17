const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        fs.readFile('message.txt', (err, data) => {
            if (err) {
                console.log(error);
            }

            res.write('<html>')
            console.log(`data frm file ` + data);
            res.write('<head><title>Enter Message</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body> ')
            res.write('</html>');
            return res.end();
        });
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            body.push(chunks);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(4000);

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     const url = req.url;

//     if(url === '/home'){
//         res.write('<h1>welcome home</h1>');
//     }
//     if(url === '/about'){
//         res.write('<h1>Welcome to About Us page</h1>');
//     }
//     if(url === '/node'){
//         res.write('<h1>Welcome to my Node Js project</h1>');
//     }
// });
// server.listen(4000);