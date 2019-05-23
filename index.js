'use strict';

const express = require('express');
// const mongoose = require('mongoose')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log('console.log hi')
  res.send('res.send hi');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
