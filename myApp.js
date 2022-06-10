let express = require('express');
let app = express();


app.get('/', function(req, res) {
    console.log('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
  })

app.use('/public', express.static(__dirname + '/public'))


































 module.exports = app;
