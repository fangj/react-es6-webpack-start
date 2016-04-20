webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _remoteView = __webpack_require__(164);

	var _remoteView2 = _interopRequireDefault(_remoteView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.React = _react2.default; //!!import

	var node = { hello: 'world' };

	_reactDom2.default.render(_react2.default.createElement(_remoteView2.default, { url: '/remote/remote.alpha.js', node: node }), document.getElementById('root'));

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _babelReactPromise = __webpack_require__(165);

	var _babelReactPromise2 = _interopRequireDefault(_babelReactPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RemoteView = (_temp = _class = function (_Component) {
	  _inherits(RemoteView, _Component);

	  function RemoteView(props) {
	    _classCallCheck(this, RemoteView);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RemoteView).call(this, props));

	    var url = _this.props.url;

	    _this.prom = new Promise(function (resolve, reject) {
	      requirejs([url], function (lib) {
	        resolve(lib.v);
	      });
	    });
	    return _this;
	  }

	  _createClass(RemoteView, [{
	    key: 'render',
	    value: function render() {
	      var node = this.props.node;

	      return _react2.default.createElement(_babelReactPromise2.default, { promise: this.prom, then: function then(v) {
	          return v({ node: node });
	        } });
	    }
	  }]);

	  return RemoteView;
	}(_react.Component), _class.propTypes = {
	  name: _react2.default.PropTypes.string
	}, _temp);
	exports.default = RemoteView;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Async = function (_React$Component) {
	  _inherits(Async, _React$Component);

	  function Async(props) {
	    _classCallCheck(this, Async);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Async).call(this, props));

	    _this.state = {
	      started: false
	    };
	    return _this;
	  }

	  _createClass(Async, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nP) {
	      if (nP.promise !== this.props.promise) {
	        this.state = {};
	        this.forceUpdate();
	        this.handlePromise(nP.promise);
	      }
	    }
	  }, {
	    key: 'handlePromise',
	    value: function handlePromise(prom) {
	      var _this2 = this;

	      this.setState({
	        started: true
	      });
	      prom.then(function (res) {
	        _this2.setState({
	          resolved: res,
	          finished: true
	        });
	      }, function (err) {
	        _this2.setState({
	          rejected: err,
	          finished: true
	        });
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.promise) {
	        this.handlePromise(this.props.promise);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var state = this.state;

	      if (state.started) {
	        if (!state.finished) {
	          if (props.pendingRender) {
	            return props.pendingRender; // custom component to indicate load in progress
	          }
	          return _react2.default.createElement('div', null);
	        }
	        if (props.then && state.resolved) {
	          return props.then(state.resolved);
	        }
	        if (props.catch && state.rejected) {
	          return props.catch(state.rejected);
	        }
	      } else {
	        return this.props.before(this.handlePromise.bind(this));
	      }
	    }
	  }]);

	  return Async;
	}(_react2.default.Component);

	Async.propTypes = {
	  before: _react.PropTypes.func, // renders it's return value before promise is handled
	  then: _react.PropTypes.func, // renders it's return value when promise is resolved
	  catch: _react.PropTypes.func, // renders it's return value when promise is rejected
	  pendingRender: _react.PropTypes.node, // renders it's value when promise is pending
	  promise: _react.PropTypes.object // promise itself
	};

	exports.default = Async;

/***/ }

});