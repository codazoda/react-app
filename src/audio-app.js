// audio-app.js

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('../src/app');
var Item = require('../src/item');

var AudioApp = React.createClass({
  render: function() {
    return (
        <div>
            <App title="Music Feed">
                <Item user="Codazoda" age="2h" desc="Check this out!" icon="image/joel.png" sound="audio/horse-neighing.mp3" />
                <Item />
                <Item />
                <Item />
                <Item />
            </App>
        </div>
    );
  }
});

ReactDOM.render(
  <AudioApp title="Audio App" />,
  document.getElementById('audio-app')
);