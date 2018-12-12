"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _react = require("react");var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


const HTML = props => {
    const { children } = props;
    return (
        _react2.default.createElement("html", null,
            _react2.default.createElement("body", null,
                _react2.default.createElement("div", { id: "root" },
                    children),

                _react2.default.createElement("script", { type: "text/javascript", src: "bundle.js", crossOrigin: "anonymous" }))));



};exports.default =
HTML;