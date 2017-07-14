'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\michael.brooks\\dev\\forum-app\\components\\navigation.js';


var isLoggedIn = ''; //localStorage.getItem('token')

var Navigation = function (_Component) {
    (0, _inherits3.default)(Navigation, _Component);

    function Navigation(props) {
        (0, _classCallCheck3.default)(this, Navigation);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

        _this.postLogin = function () {
            _axios2.default.post('http://localhost:1337/auth', {
                username: _this.state.username,
                password: _this.state.password
            }).then(function (response) {
                localStorage.setItem('token', response.data.token);
                this.setState({ isLoggedIn: true });
            }.bind(_this)).catch(function (error) {
                console.log('error', error.response);
            });
        };

        _this.render = function () {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('nav', { className: 'navbar ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('div', { className: 'navbar-brand', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', { className: 'navbar-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Forum')), _react2.default.createElement('div', { className: 'navbar-burger burger', 'data-target': 'navMenuExample', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }))), _react2.default.createElement('div', { id: 'navMenuExample', className: 'navbar-menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _this.renderNavigation())));
        };

        _this.state = {
            isLoggedIn: isLoggedIn ? !false : !true,
            username: '',
            password: ''
        };

        _this.postLogout = _this.postLogout.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Navigation, [{
        key: 'renderNavigation',
        value: function renderNavigation() {
            var _this2 = this;

            if (this.state.isLoggedIn === true || isLoggedIn) return _react2.default.createElement('div', { className: 'navbar-end', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('div', { className: 'navbar-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('button', { className: 'button is-success', onClick: this.postLogout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Logout')));

            return _react2.default.createElement('div', { className: 'navbar-end', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { className: 'navbar-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('input', { className: 'input', value: this.state.username, onChange: function onChange(event) {
                    _this2.setState({ username: event.target.value });
                }, type: 'text', placeholder: 'Username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), ' \xA0', _react2.default.createElement('input', { className: 'input', value: this.state.password, onChange: function onChange(event) {
                    _this2.setState({ password: event.target.value });
                }, type: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), ' \xA0', _react2.default.createElement('button', { className: 'button is-success', onClick: this.postLogin, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Login')), _react2.default.createElement('div', { className: 'navbar-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_link2.default, { href: '/register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('a', { className: 'button is-info', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Register'))));
        }
    }, {
        key: 'postLogout',
        value: function postLogout() {
            //localStorage.removeItem('token')
            this.setState({ isLoggedIn: false });
        }
    }]);

    return Navigation;
}(_react.Component);

exports.default = Navigation;