"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Page = require("./Page");

var _Page2 = _interopRequireDefault(_Page);

var _SearchBar = require("./SearchBar");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Configuration from "./configuration.json";


var Hello = function (_React$Component) {
    _inherits(Hello, _React$Component);

    function Hello(props) {
        _classCallCheck(this, Hello);

        var _this = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

        _this.state = {
            location: "home"
        };
        return _this;
    }

    _createClass(Hello, [{
        key: "navigate",
        value: function navigate(newLocation) {
            this.setState({
                "location": newLocation
            });
        }
    }, {
        key: "render",
        value: function render() {
            switch (this.state.location) {
                case "home":
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_SearchBar2.default, { navigate: this.navigate.bind(this) })
                    );
                    break;
                default:
                    var config = ["belly dance", "touch your nose"];
                    return _react2.default.createElement(_Page2.default, { navigate: this.navigate.bind(this), bro: config, diagnosis: this.state.location });
            }
        }
    }]);

    return Hello;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Hello, null), document.getElementById("main"));