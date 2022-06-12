let express = require('express');
let app = express();


app.get('/', function(req, res) {
    console.log('Hello Express');
    res.sendFile(__dirname + '/json');
  })

app.get('/json', function(req, res) {
    console.log('Hello Express');
    res.json({"message": "Hello json"});
  })

app.use('/public', express.static(__dirname + '/public'))


































 module.exports = app;
