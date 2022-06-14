let express = require('express');
let app = express();
require('dotenv').config();

let bodyParser = require('body-parser');
var response = "Hello json";

app.use('/', bodyParser.urlencoded({ extended: false }),bodyParser.json(),
  //       function(req, res) {
  //   console.log('Hello Express');
  //   res.sendFile(__dirname + '/json');
  // }, 
        function(req, res, next) {
  console.log("I'm a middleware...");
          console.log(req.method, req.path, " - " 
                      ,req.ip);

          // bodyParser.urlencoded({extended: false});
          // console.log('bodyParser',bodyParser.urlencoded({extended: false}));
          next();
          
          // express.static(__dirname + '/now')
  
});

app.get('/name', function(req, res, next){
  console.log('use >>>' )
  var { first: firstName, last: lastName } = req.query;
  res.json({
    // name: `${firstName} ${lastName}`
    // name: firstName + " " + lastName
    name: "angie"
  });
})
  app.post('/name', function(req, res, next){
  // console.log('use',req.body)
  var { first: firstName, last: lastName } = req.body;
  res.json({
    name: `${firstName} ${lastName}`
    // name: firstName + " " + lastName
    // name: "angie"
  });
  
})

app.get('/name', function(req, res, next){
  console.log('use',req.query)
  var { first: firstName, last: lastName } = req.query;
  res.json({
    // name: `${firstName} ${lastName}`
    name: firstName + " " + lastName
  });
})


app.get('/:word/echo', function(req, res, next){
  console.log('req.params.word',req.params.word)
  res.json({"echo": req.params.word})
});

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
