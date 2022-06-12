let express = require('express');
let app = express();
require('dotenv').config();


app.get('/', function(req, res) {
    console.log('Hello Express');
    res.sendFile(__dirname + '/json');
  })

app.get('/json', function(req, res) {
    console.log('Hello Express ' + process.env.MESSAGE_STYLE);

    if(process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase' || process.env.MESSAGE_STYLE.toLowerCase() === 'allcaps'){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }

    
  })

app.use('/public', express.static(__dirname + '/public'))


































 module.exports = app;
