// app.js

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="app-bar">
          <i className="material-icons">dehaze</i>
          <span className="title">{this.props.title}</span>
          <i className="material-icons more">more_vert</i>
        </h1>
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;