var express = require('express');
var app = express();

app.set('port', process.env.PORT || 80);
app.use(express.static(__dirname));
app.listen(app.get('port'), function () {});