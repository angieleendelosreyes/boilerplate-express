let express = require('express');
let app = express();

// console.log('Hello World');

app.get('/', function(req, res) {
    console.log('Hello Express');
    res.send('Hello Express');
  })

// app.get('/')
//     .get(function(req, res) {
//         res.send('Hello Express');
//     })


































 module.exports = app;
