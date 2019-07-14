var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");

// sets up the express app and server
var app = express();
var PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, "./app/public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(methodOverride("_method"));


var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// starts the server to begin listening
app.listen(PORT, function() {
	console.log("App listening on PORT" + PORT);
});