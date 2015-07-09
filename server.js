var express = require('express');
var app = express();
var publicDir = require('path').resolve(__dirname, './public');
app.use(express.static(publicDir));
app.use(function(req, res) {res.sendFile(publicDir + '/index.html')});
app.listen(3000);
console.log('Express listening on port 3000');


