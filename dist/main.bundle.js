webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\status\\demo\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\status\\demo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactRouter = __webpack_require__(178);

	__webpack_require__(233);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = (0, _reactRouter.withRouter)(_react2.default.createClass({
	  displayName: 'App',
	  getInitialState: function getInitialState() {
	    return {
	      tocas: [{ name: 'duck' }, { name: 'sunk' }, { name: '无语' }]
	    };
	  },
	  AddTaco: function AddTaco() {
	    var name = prompt('taco name?');
	    this.setState({
	      tocas: this.state.tocas.concat({ name: name })
	    });
	  },
	  handler: function handler(paras) {
	    this.setState({
	      tocas: this.state.tocas.filter(function (toca) {
	        return toca.name !== paras;
	      })
	    });
	    console.log(paras);
	    this.props.router.push('/');
	  },
	  render: function render() {
	    var link = this.state.tocas.map(function (toca, i) {
	      return _react2.default.createElement(
	        'li',
	        { key: i },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/toca/' + toca.name },
	          toca.name
	        )
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'App' },
	      _react2.default.createElement(
	        'button',
	        { onClick: this.AddTaco },
	        'Addtaco'
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: 'Master' },
	        link
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'Detail' },
	        this.props.children && _react2.default.cloneElement(this.props.children, {
	          remvoeChang: this.handler
	        })
	      )
	    );
	  }
	}));

	var Toca = _react2.default.createClass({
	  displayName: 'Toca',
	  remove: function remove() {
	    this.props.remvoeChang(this.props.params.name);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h3',
	        null,
	        this.props.params.name
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.remove },
	        'remove'
	      )
	    );
	  }
	});

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: App },
	    _react2.default.createElement(_reactRouter.Route, { path: '/toca/:name', component: Toca })
	  )
	), document.getElementById("app"));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\status\\demo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 233:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});