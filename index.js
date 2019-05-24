'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(req, res)
  res.send('res.send hi2');
});

app.get('/test/', (req, res) => {
  console.log('testing')
  res.send('testing');
});

app.get('/mongo/', (req, res) => {
    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect('mongodb://localhost:27017/mydb', function (err, db) {
      if (err) {
        console.log(err)
      }
        console.log(1)
        console.log(db)
      // db.collection('cities').find().toArray(function (err, result) {
      //   if (err) throw err

      //   console.log(result)
      // })
    })
  res.send('testing');

});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
