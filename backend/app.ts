import express from 'express';
import config from './config.json';
import path from 'path'

import { fibonacci } from './some_functions'

const app = express();
const port = config.port;
const frontDir = path.resolve(__dirname + "/../frontend");
app.use(express.static(frontDir));

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
