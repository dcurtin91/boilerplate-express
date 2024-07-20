let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
  });

app.use("/public", express.static(__dirname + "/public"));
//css
 module.exports = app;
