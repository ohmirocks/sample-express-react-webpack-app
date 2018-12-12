'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');var _server2 = _interopRequireDefault(_server);
var _html = require('../pres/html');var _html2 = _interopRequireDefault(_html);
var _helloWorld = require('../pres/hello-world');var _helloWorld2 = _interopRequireDefault(_helloWorld);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const app = (0, _express2.default)();
app.use(_express2.default.static('static'));

app.get('/', function (req, res) {
    res.send(_server2.default.renderToString(
    _react2.default.createElement(_html2.default, null,
        _react2.default.createElement(_helloWorld2.default, null))));



    res.end();
});
app.listen(3000);