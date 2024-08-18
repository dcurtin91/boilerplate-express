let express = require('express');
let app = express();
require('dotenv').config()

app.use(function middleware(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
  });

app.get("/json",(req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase"){
    res.json({"message": "HELLO JSON"})
  }  else {
  res.json({"message": "Hello json"})}
});


app.use("/public", express.static(__dirname + "/public"));
//css
 module.exports = app;

 
