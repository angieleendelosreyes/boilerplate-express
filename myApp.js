let express = require('express');
let app = express();
require('dotenv').config();
var response = "Hello json";

app.get('/', function(req, res) {
    console.log('Hello Express');
    res.sendFile(__dirname + '/json');
  })

app.get('/json', function(req, res) {
    console.log('Hello Express ' + process.env.MESSAGE_STYLE);

    if(process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase' || process.env.MESSAGE_STYLE.toLowerCase() === 'allcaps'){
      console.log('1st if');
        response = response.toUpperCase();
       console.log('1st end if', response);
    }else{
        response = response.toLowerCase();
      console.log('2nd end if', response);
    }

    res.json({"message": response});
  })

app.use('/public', express.static(__dirname + '/public'))


































 module.exports = app;
