'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSearchInput = require('react-search-input');

var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);

var _configuration = require('./configuration.json');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
	_inherits(SearchBar, _Component);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

		_this.state = {
			searchTerm: ""
		};
		_this.searchUpdated = _this.searchUpdated.bind(_this);
		return _this;
	}

	_createClass(SearchBar, [{
		key: 'searchUpdated',
		value: function searchUpdated(e) {
			console.log(e);
			this.setState({
				searchTerm: e
			});
		}
	}, {
		key: 'navigate',
		value: function navigate(location) {
			this.props.navigate(location);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var components = [];
			_configuration2.default.map(function (x) {
				var section = JSON.parse(x)["diagnosis_name"];
				if (section.toLowerCase().includes(_this2.state.searchTerm)) {
					components.push(_react2.default.createElement(
						'h5',
						{ onClick: _this2.navigate.bind(_this2, section) },
						' ',
						section,
						' '
					));
				}
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactSearchInput2.default, { onChange: this.searchUpdated.bind(this) }),
				components
			);
		}
	}]);

	return SearchBar;
}(_react.Component);

exports.default = SearchBar;