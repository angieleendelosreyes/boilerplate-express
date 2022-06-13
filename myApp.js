let express = require('express');
let app = express();
require('dotenv').config();
var response = "Hello json";

app.use('/', 
  //       function(req, res) {
  //   console.log('Hello Express');
  //   res.sendFile(__dirname + '/json');
  // }, 
        function(req, res, next) {
  console.log("I'm a middleware...");
          console.log(req.method, req.path, " - " 
                      ,req.ip);
          next();
          
          // express.static(__dirname + '/now')
  
})

app.get('/now', function(req, res, next) {
  console.log('now get');
  req.time = new Date().toString();
          console.log(req.time);
  next();
}, function(req, res, next) {
  // console.log('req.time', req.time); 
  res.json({"time": req.time});
}
       );

app.get('/json', function(req, res) {
  // console.log(req.method," ", req.path, " - " 
  //                     ,req.ip);
  //   console.log('Hello Express ' + process.env.MESSAGE_STYLE);

    if(process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase' || process.env.MESSAGE_STYLE.toLowerCase() === 'allcaps'){
      // console.log('1st if');
        response = response.toUpperCase();
       console.log('1st end if', response);
    }else{
        response = "Hello json";
      console.log('2nd end if', response);
    }

    res.json({"message": response});
  })

app.use('/public', express.static(__dirname + '/public'))


































 module.exports = app;
