// item.js

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({
  getDefaultProps: function() {
    return {
      user: 'Username',
      age: '1h',
      desc: 'The description.',
    };
  },
  render: function() {
    var icon = {};
    // Set an icon if one is specified in the props
    if (typeof this.props.icon !== "undefined") {
      icon = {
        backgroundImage: "url('image/joel.png')"
      };
    };
    return (
      <div className="item">
        <div className="info-line">
          <div className="icon" style={icon} />    
          <span className="user">{this.props.user}</span>
          <span className="time">{this.props.age}</span>
        </div>
        <div className="description">
          {this.props.desc}
        </div>
        <div className="player-line">
          <audio controls>
            <source src={this.props.sound} type="audio/mpeg" />
          </audio>
        </div>
        <div className="tool-line">
          <i className="favorite material-icons">favorite_border</i>
          <i className="material-icons disabled">shopping_cart</i>
          <i className="share material-icons">share</i>
        </div>
        <hr />
      </div>
    );
  }
});

module.exports = Item;