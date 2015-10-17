var React = require("react");

module.exports = React.createClass({
  render: function() {
    var content = this.props.content;
    var createHTML = function() { return { __html: content  } };
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>isomorphic javascript demo</title>
          <script src="./lib/react.js" ></script>
          <script src="./lib/ReactRouter.min.js" ></script>
          <link href="/css/style.css" rel="stylesheet" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={createHTML()}></div>
          <script src="./js/app.js" ></script>
        </body>
      </html>
    );
  }
});
