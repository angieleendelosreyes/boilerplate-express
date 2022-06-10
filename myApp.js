let express = require('express');
let app = express();


app.get('/', function(req, res) {
    console.log('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
  })



































 module.exports = app;
