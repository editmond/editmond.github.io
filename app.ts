import express from 'express';
import config from './config.json';
import path from 'path'

import http from 'http'
import https from 'https'
import fs from 'fs'

import { fibonacci } from './some_functions'

const options = {
  key: fs.readFileSync('./ssl_cert/privkey.pem'),
  cert: fs.readFileSync('./ssl_cert/fullchain.pem'),
};

const app = express();
const port = config.port;
const frontDir = path.resolve(__dirname + "/frontend");
app.use(express.static(frontDir));

// https.createServer(options, app).listen(parseInt(config.port)+443);
http.createServer(app).listen(config.port);


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.sendFile(frontDir + '/index.html'); 
// })

app.get('/fibonacci', (req, res) => {
  let multiplier = 100;
  let increaseChance = 1;
  while (Math.random() < increaseChance) {
    multiplier *= 10;
    increaseChance -= Math.random();
  }
  const rand = Math.random() * multiplier;
  res.send({"num": fibonacci(rand).toString()})
  // res.sendFile(__dirname + "/index.html")
  // res.redirect('/subpages/fun/fibonacci.html')
});

app.get('/fibonacci/:nth', (req, res) => {
  const nth = parseInt(req.params.nth);
  if (!nth && nth != 0) {
    res.status(400).send(`Received ${nth} which is not an integer`)
  }
  res.status(200).send({"num": fibonacci(nth).toString()})
});

app.listen(port, () => {
  console.log(`HTTP app listening on port ${port}`);
})

app.listen(parseInt(port)+443, () => {
  console.log(`HTTPS app listening on port ${parseInt(port)+443}`);
})
