'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _main = require('../styles/main.scss');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\michael.brooks\\dev\\forum-app\\components\\layout.js';


_index2.default.onRouteChangeStart = function (url) {
  console.log('Loading: ' + url);
  _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var linkStyle = {
  margin: '0 10px 0 0'
};

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'This is the default title' : _ref$title;
  return _react2.default.createElement('div', { style: { marginBottom: 20 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/nprogress.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _main2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_navigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), children);
};