webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Knight = __webpack_require__(159);

	var _Knight2 = _interopRequireDefault(_Knight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_Knight2.default, null), document.getElementById('root'));

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pacomo = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(163);

	var Knight = (0, _pacomo.decorator)(_class = function (_Component) {
	  _inherits(Knight, _Component);

	  function Knight() {
	    _classCallCheck(this, Knight);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Knight).apply(this, arguments));
	  }

	  _createClass(Knight, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'active' },
	        '♘'
	      );
	    }
	  }]);

	  return Knight;
	}(_react.Component)) || _class;

	exports.default = Knight;

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transformer = exports.decorator = undefined;

	var _reactPacomo = __webpack_require__(161);

	var _withPackageName = (0, _reactPacomo.withPackageName)('App');

	var decorator = _withPackageName.decorator;
	var transformer = _withPackageName.transformer;
	exports.decorator = decorator;
	exports.transformer = transformer;

/***/ },

/***/ 163:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});