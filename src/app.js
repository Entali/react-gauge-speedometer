require('./app.styl');

var React = window.React = require('react');
var App = require('components/App');
var isMobile = require('utils/isMobile');

window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
}, false);

if (isMobile()) {
  React.initializeTouchEvents(true);
}

React.render(
    <App />,
    document.getElementById('app')
);