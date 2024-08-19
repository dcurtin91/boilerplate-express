let express = require('express');
let app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/name', function(req, res) {
  var firstName = req.body.first;
  var lastName = req.body.last;
  res.json({
    name: `${firstName} ${lastName}`
  })
})

app.use(function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({
    time: req.time});
});

app.get('/name', function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  })
})

app.get("/:word/echo", function(req, res) {

  res.json({
    echo: req.params.word
  })
})

app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
  });

  app.use("/public", express.static(__dirname + "/public"));


  app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
      res.json({
         message: "Hello json".toUpperCase()})
    } else {
      res.json({
        message: "Hello json"
      })
    }
    
  });


 module.exports = app;