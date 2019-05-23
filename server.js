'use strict';

const express = require('express');
const mongoose = require('mongoose')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/product/:productId/', (req, res) => {
  res.send(req.params);
});

app.get('/mongoose/', (req, res) => {
    mongoose.connect('mongodb://172.17.0.2:27017/test', {useNewUrlParser: true});
    const Cat = mongoose.model('Cat', { name: String });

    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));
    Cat.find().then() => res.send(res)
});

app.get('/city/', (req, res) => {
  res.send(require('./src/city'));
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
