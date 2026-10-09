const http = require('http');
const fs = require('fs')
const filecontent = fs.readFileSync('Dipu.css/52Frontend.html', 'utf-8');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
     
    res.end(filecontent);

})

server.listen(5000, '127.0.0.1', () => {
    console.log("Listening to the port number 5000");

});
