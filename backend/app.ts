import express from 'express';
import config from './config.json';
import path from 'path'

import http from 'http'
import https from 'https'
import fs from 'fs'

import { fibonacci } from './some_functions'

const options = {
  key: fs.readFileSync('./ssl_cert/private.key.pem'),
  cert: fs.readFileSync('./ssl_cert/domain.cert.pem'),
};

const app = express();
const port = config.port;
const frontDir = path.resolve(__dirname + "/../frontend");
app.use(express.static(frontDir));

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(config.port);
http.createServer(app);


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.sendFile(frontDir + '/index.html'); 
// })

app.get('/fibonacci/:nth', (req, res) => {
  const nth = parseInt(req.params.nth);
  res.send(fibonacci(nth).toString())
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
