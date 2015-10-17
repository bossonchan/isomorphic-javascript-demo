var React = require("react");
var ReactRouter = require("react-router");

var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Route  = ReactRouter.Route;
var Link  = ReactRouter.Link;

var Home = require("./home");
var About = require("./about");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div id="nav" >
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
        </div>
        <div id="content" >
          <RouteHandler id="testing" />
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home} />
    <Route name="about" handler={About} />
    <DefaultRoute handler={Home} />
  </Route>
);

module.exports = routes;
