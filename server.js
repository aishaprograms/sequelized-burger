//Require npm and modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");


var PORT = process.env.PORT || 8080;

// Initalize express app
var app = express();

//Use static content from public directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=PUT
app.use(methodOverride('_method'));

// Set Handlebars content
var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give access to server
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
