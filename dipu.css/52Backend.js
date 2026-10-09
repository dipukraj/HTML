const http = require('http');
const fs = require('fs')
const filecontent = fs.readFileSync('Dipu.css/52Frontend.html', 'utf-8');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
     
    res.end(filecontent);

})
