var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

//view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set Static Folder

app.use(express.static(path.join(__dirname, 'public')));

//body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/', tasks);

app.listen(port, function() {
    console.log("Server started on port" + port);
});