require("node-jsx").install({ extension: ".jsx" });

var express = require("express");
var compression = require("compression");
var app = express();
var port = 8888;

app.use(compression());
app.use(express.static(__dirname + "/public"));

var Layout = require("./views/layout");
var React  = require("react");
var layout = React.createFactory(Layout);

var routes = require("./views/router");
var Router = require("react-router");

app.use(function(req, res) {
  Router.run(routes, req.url, function(Handler) {
    var handler = React.createElement(Handler);
    var content = React.renderToString(handler);
    var html = React.renderToString(layout({ content: content }));
    res.send(html);
  });
});

app.listen(port, function() {
  console.log("Listening port ", port);
});
