var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var HomePageContent = require('./homepage-content.js');

$(function () {
    ReactDOM.render(
        <HomePageContent />,
        document.getElementById('content')
    );
});
