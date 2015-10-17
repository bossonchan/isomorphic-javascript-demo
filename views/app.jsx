var routes = require("./router");
var ReactRouter = require("react-router");

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
  React.render(
    <Handler />,
    document.getElementById("app")
  );
});
