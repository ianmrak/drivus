webpackHotUpdate(0,{

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(8);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(16);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Route: {
	    displayName: 'Route'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/components/route.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var Route = _wrapComponent('Route')(function (_Component) {
	  _inherits(Route, _Component);
	
	  function Route(props) {
	    _classCallCheck(this, Route);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Route).call(this, props));
	
	    _this.setActiveRoute = _this.setActiveRoute.bind(_this);
	    return _this;
	  }
	
	  _createClass(Route, [{
	    key: 'setActiveRoute',
	    value: function setActiveRoute() {
	      return this.props.selectRoute({
	        route: this.props.route,
	        style: this.props.classStyle
	      });
	    }
	  }, {
	    key: 'msToTime',
	    value: function msToTime(ms) {
	      var duration = new Date(ms),
	          minutes = parseInt(duration.getMinutes()),
	          hours = parseInt(duration.getHours()),
	          timeOfDay = hours >= 12 ? 'PM' : 'AM';
	      hours = hours > 12 ? hours - 12 : hours;
	      minutes = minutes < 10 ? "0" + minutes : minutes;
	      return hours + ":" + minutes + ' ' + timeOfDay;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var eta = Math.round(this.props.route.eta / 60),
	          totalTime = Math.round(this.props.route.duration + this.props.route.eta) * 1000,
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          arrivalTime = this.msToTime(Date.now() + totalTime),
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          disclaimer = this.props.carpool ? '\nMay make additional stops' : '',
	          image = this.props.marker ? _react3.default.createElement('img', { src: this.props.marker, className: 'marker-tag' }) : null;
	
	      return _react3.default.createElement(
	        'li',
	        { className: 'list-item ' + this.props.classStyle,
	          onClick: this.setActiveRoute },
	        _react3.default.createElement(
	          'div',
	          { className: 'route-cost' },
	          cost
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'route-name' },
	          this.props.route.display_name
	        ),
	        image,
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(
	            'div',
	            { className: 'driver-eta' },
	            'Pickup: ',
	            eta,
	            ' ',
	            etaMinutes
	          ),
	          _react3.default.createElement(
	            'div',
	            { className: 'route-duration' },
	            'Arrival: ',
	            arrivalTime
	          )
	        ),
	        _react3.default.createElement(
	          'span',
	          { className: 'disclaimer' },
	          disclaimer
	        )
	      );
	    }
	  }]);
	
	  return Route;
	}(_react2.Component));
	
	exports.default = Route;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setMarkers = setMarkers;
	exports.setExpandedMarkers = setExpandedMarkers;
	
	var _types = __webpack_require__(11);
	
	// setMarkers -> reducer_route_marker
	function setMarkers(coords) {
	  var newMarkers = {};
	  newMarkers.start = new google.maps.Marker({
	    position: coords.start,
	    animation: 2
	  });
	  newMarkers.end = new google.maps.Marker({
	    position: coords.end,
	    animation: 2
	  });
	  return {
	    type: _types.SET_MARKERS,
	    payload: newMarkers
	  };
	}
	// setExpandedMarkers -> reducer_expanded_marker
	function setExpandedMarkers(coords) {
	  var newMarkers = {};
	
	  for (var data in coords) {
	    var pStart = coords.price.start;
	    var tStart = coords.time.start;
	    var path = pStart.lat === tStart.lat && pStart.lng === tStart.lng && coords.cTime === coords.cPrice ? __webpack_require__(213) : data === 'price' ? __webpack_require__(215) : __webpack_require__(217);
	
	    var marker = new google.maps.Marker({
	      position: coords[data].start,
	      animation: 2,
	      icon: path
	    });
	    newMarkers[data] = marker;
	  }
	  return {
	    type: _types.SET_EXPANDED_MARKERS,
	    payload: newMarkers
	  };
	}

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { route: null, class: null } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.ROUTE_SELECTED:
	      console.log('A route has been selected');
	      return action.payload;
	
	    case _types.ROUTE_DESELECTED:
	      console.log('A route has been deselected');
	      return { route: null, class: null };
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { start: null, end: null } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.SET_ADDRESS:
	      console.log('Saving current address as', action.payload);
	      return action.payload;
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { start: null, end: null } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.RECEIVE_ROUTES_UBER:
	    case _types.RECEIVE_ROUTES_LYFT:
	      console.log('Saving current location as', action.coords);
	      return action.coords;
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.SET_DIRECTIONS:
	      console.log('Got new directions', action.payload);
	      return action.payload;
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { price: null, time: null } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.SET_EXPANDED_MARKERS:
	      console.log('Expanded makers have been generated');
	      return action.payload;
	    case _types.RECEIVE_ROUTES_LYFT:
	    case _types.RECEIVE_ROUTES_UBER:
	      return { price: null, time: null };
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { price: null, time: null } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.NO_EXPANDED_ROUTES:
	      console.log('No better deals found.');
	      return state;
	    case _types.REQUEST_ROUTES:
	      return {
	        price: null,
	        time: null
	      };
	    case _types.RECEIVE_EXPANDED_ROUTES:
	      console.log('Received better deals!', action.routes);
	      return action.routes;
	    case _types.RECEIVE_ROUTES_LYFT:
	    case _types.RECEIVE_ROUTES_UBER:
	      return { price: null, time: null };
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { start: null, end: null } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.SET_MARKERS:
	      console.log('New markers have been generated');
	      return action.payload;
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { uber: [], lyft: [] } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.INVALID_ROUTES_UBER:
	      console.log('Invalid route!');
	      return state;
	
	    case _types.REQUEST_ROUTES:
	      console.log('Requesting routes...');
	      return {
	        uber: [],
	        lyft: []
	      };
	    case _types.RECEIVE_ROUTES_UBER:
	      console.log('Received Uber routes!', action.routes);
	      return Object.assign({}, state, {
	        uber: action.routes
	      });
	    case _types.RECEIVE_ROUTES_LYFT:
	      console.log('Received Lyft routes!', action.routes);
	      return Object.assign({}, state, {
	        lyft: action.routes
	      });
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(8);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(16);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _route = __webpack_require__(93);
	
	var _route2 = _interopRequireDefault(_route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  ExpandedRouteList: {
	    displayName: 'ExpandedRouteList'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/components/expandedRouteList.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	// Components
	
	
	// Fast and Cheap images
	var time = __webpack_require__(216);
	var price = __webpack_require__(214);
	var priceTime = __webpack_require__(212);
	
	var ExpandedRouteList = _wrapComponent('ExpandedRouteList')(function (_Component) {
	  _inherits(ExpandedRouteList, _Component);
	
	  function ExpandedRouteList(props) {
	    _classCallCheck(this, ExpandedRouteList);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExpandedRouteList).call(this, props));
	
	    _this.state = {
	      0: 'expanded-price',
	      1: 'expanded-money'
	    };
	    return _this;
	  }
	
	  _createClass(ExpandedRouteList, [{
	    key: 'renderRoutes',
	    value: function renderRoutes() {
	      var routes = [];
	      var key = 0;
	      for (var route in this.props.routes) {
	        var marker = route === 'time' ? time : price;
	        var eprice = this.props.routes.price;
	        var etime = this.props.routes.time;
	        if (eprice.avg_estimate === etime.avg_estimate && eprice.display_name === etime.display_name && eprice.duration === etime.duration) {
	          routes.push(_react3.default.createElement(_route2.default, {
	            key: key++,
	            route: this.props.routes.price,
	            selectRoute: this.props.selectRoute,
	            classStyle: route,
	            marker: priceTime
	          }));
	          return routes;
	        }
	        if (this.props.routes[route] !== null) {
	          routes.push(_react3.default.createElement(_route2.default, {
	            key: key++,
	            route: this.props.routes[route],
	            selectRoute: this.props.selectRoute,
	            classStyle: route,
	            marker: marker
	          }));
	        }
	      }
	      return routes;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var routes = void 0;
	      if (this.props.routes.price || this.props.routes.time) {
	        routes = this.renderRoutes();
	      }
	      return _react3.default.createElement(
	        'div',
	        { className: 'expanded-routes' },
	        _react3.default.createElement(
	          'ul',
	          null,
	          routes
	        )
	      );
	    }
	  }]);
	
	  return ExpandedRouteList;
	}(_react2.Component));
	
	exports.default = ExpandedRouteList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(8);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(16);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _route = __webpack_require__(93);
	
	var _route2 = _interopRequireDefault(_route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  RouteList: {
	    displayName: 'RouteList'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/components/routeList.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	// Components
	
	
	var RouteList = _wrapComponent('RouteList')(function (_Component) {
	  _inherits(RouteList, _Component);
	
	  function RouteList(props) {
	    _classCallCheck(this, RouteList);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RouteList).call(this, props));
	
	    _this.state = {
	      uber: 'uber-list-container',
	      lyft: 'lyft-list-container'
	    };
	    return _this;
	  }
	
	  _createClass(RouteList, [{
	    key: 'renderRoutes',
	    value: function renderRoutes() {
	      var _this2 = this;
	
	      // Div formatting including carpool disclaimer for certain services
	      return this.props.routes.map(function (route) {
	        if (route.high_estimate) {
	          var carpool = false;
	          if (route.display_name === 'UberPOOL' || route.display_name === 'Lyft Line') {
	            carpool = true;
	          }
	          return _react3.default.createElement(_route2.default, {
	            key: route.display_name,
	            route: route,
	            selectRoute: _this2.props.selectRoute,
	            classStyle: _this2.props.classStyle,
	            carpool: carpool
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = this.state[this.props.classStyle];
	      return _react3.default.createElement(
	        'div',
	        { className: style },
	        _react3.default.createElement(
	          'ul',
	          null,
	          this.renderRoutes()
	        )
	      );
	    }
	  }]);
	
	  return RouteList;
	}(_react2.Component));
	
	exports.default = RouteList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(8);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(16);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(34);
	
	var _index = __webpack_require__(58);
	
	var _redux = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  ActiveRoute: {
	    displayName: 'ActiveRoute'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/containers/activeRoute.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var ActiveRoute = _wrapComponent('ActiveRoute')(function (_Component) {
	  _inherits(ActiveRoute, _Component);
	
	  function ActiveRoute(props) {
	    _classCallCheck(this, ActiveRoute);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ActiveRoute).call(this, props));
	
	    _this.state = {
	      style: {
	        uber: 'uber',
	        lyft: 'lyft',
	        price: 'price',
	        time: 'time'
	      },
	      orderCab: null
	    };
	    _this.orderRide = _this.orderRide.bind(_this);
	    return _this;
	  }
	
	  _createClass(ActiveRoute, [{
	    key: 'orderRide',
	    value: function orderRide() {
	      var startAdd = this.props.currentAddress.start,
	          endAdd = this.props.currentAddress.end,
	          startLat = this.props.currentCoords.start.lat,
	          startLng = this.props.currentCoords.start.lng,
	          endLat = this.props.currentCoords.end.lat,
	          endLng = this.props.currentCoords.end.lng;
	      // Assigns order url to Uber
	      if (this.props.route.display_name.match(/uber/i)) {
	        var uberUrl = "uber://?client_id=37yHG1-x8iwme2fjogxoa3wU_4n2vWd5exCpEB8u&action=setPickup";
	        var uberCoords = '&pickup[latitude]=' + startLat + '&pickup[longitude]=' + startLng + '&pickup[formatted_address]=' + encodeURIComponent(startAdd) + '&dropoff[latitude]=' + endLat + '&dropoff[longitude]=' + endLng + '&dropoff[formatted_address]=' + encodeURIComponent(endAdd) + '&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d';
	        var orderUber = uberUrl + uberCoords;
	        this.setState({ orderCab: orderUber });
	        // Assigns order url to lyft
	      } else if (this.props.route.display_name.match(/lyft/i)) {
	        var lyftUrl = 'lyft://ridetype?id=' + this.props.route.display_name.replace(' ', '_').toLowerCase() + '&partner=_2bLC2X8YfE8bVC1qcLa0vOQut5r1lB_';
	        var lyftCoods = '&pickup[latitude]=' + startLat + '&pickup[longitude]=' + startLng + '&destination[latitude]=' + endLat + '&destination[longitude]=' + endLng;
	        var orderLyft = lyftUrl + lyftCoods;
	        this.setState({ orderCab: orderLyft });
	      }
	    }
	  }, {
	    key: 'msToTime',
	    value: function msToTime(ms) {
	      var duration = new Date(ms),
	          minutes = parseInt(duration.getMinutes()),
	          hours = parseInt(duration.getHours()),
	          timeOfDay = hours >= 12 ? 'PM' : 'AM';
	      hours = hours > 12 ? hours - 12 : hours;
	      minutes = minutes < 10 ? "0" + minutes : minutes;
	      return hours + ":" + minutes + ' ' + timeOfDay;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // Formatting for display...could be done better?
	      if (!this.props.route) {
	        return _react3.default.createElement('div', null);
	      }
	      var eta = Math.round(this.props.route.eta / 60),
	          totalTime = Math.round(this.props.route.duration + this.props.route.eta) * 1000,
	          arrivalTime = this.msToTime(Date.now() + totalTime),
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          backgroundColor = this.state.style[this.props.style],
	          classes = 'selected-route-container ' + backgroundColor;
	      return _react3.default.createElement(
	        'div',
	        null,
	        _react3.default.createElement('div', { onClick: this.props.deselectRoute, className: 'lightbox-background' }),
	        _react3.default.createElement(
	          'div',
	          { className: classes },
	          _react3.default.createElement(
	            'h1',
	            null,
	            this.props.route.display_name
	          ),
	          _react3.default.createElement(
	            'h1',
	            null,
	            cost
	          ),
	          _react3.default.createElement(
	            'p',
	            null,
	            'Pickup: ',
	            eta,
	            ' ',
	            etaMinutes
	          ),
	          _react3.default.createElement(
	            'p',
	            null,
	            'Arrival: ',
	            arrivalTime
	          ),
	          _react3.default.createElement(
	            'a',
	            { href: this.state.orderCab, target: '_blank' },
	            _react3.default.createElement(
	              'button',
	              { id: 'order-btn', onClick: this.orderRide },
	              'Order Ride'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ActiveRoute;
	}(_react2.Component));
	
	function mapStateToProps(state) {
	  return {
	    currentAddress: state.currentAddress,
	    currentCoords: state.currentCoords,
	    route: state.activeRoute.route,
	    style: state.activeRoute.style
	  };
	}
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ deselectRoute: _index.deselectRoute }, dispatch);
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ActiveRoute);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(8);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(16);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(34);
	
	var _index = __webpack_require__(58);
	
	var _redux = __webpack_require__(26);
	
	var _routeList = __webpack_require__(191);
	
	var _routeList2 = _interopRequireDefault(_routeList);
	
	var _expandedRouteList = __webpack_require__(189);
	
	var _expandedRouteList2 = _interopRequireDefault(_expandedRouteList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  RouteLists: {
	    displayName: 'RouteLists'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/containers/routeLists.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	// Makes sure action flows through all reducers to maintain state
	
	
	// Components
	
	
	var RouteLists = _wrapComponent('RouteLists')(function (_Component) {
	  _inherits(RouteLists, _Component);
	
	  function RouteLists() {
	    _classCallCheck(this, RouteLists);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RouteLists).apply(this, arguments));
	  }
	
	  _createClass(RouteLists, [{
	    key: 'render',
	    value: function render() {
	      var expandedRoutes = void 0,
	          listMessage = _react3.default.createElement(
	        'h1',
	        { className: 'empty-message' },
	        'Search for rides'
	      );
	      if (this.props.uberRoutes.length || this.props.lyftRoutes.length) {
	        var style = { height: '0%', margin: 0, opacity: 0 };
	        listMessage = _react3.default.createElement(
	          'h1',
	          { style: style, className: 'empty-message' },
	          'Search for rides'
	        );
	      }
	      return _react3.default.createElement(
	        'div',
	        { className: 'list-container' },
	        listMessage,
	        _react3.default.createElement(_expandedRouteList2.default, {
	          routes: this.props.expandedRoutes,
	          selectRoute: this.props.selectRoute
	        }),
	        _react3.default.createElement(_routeList2.default, {
	          routes: this.props.uberRoutes,
	          classStyle: 'uber',
	          selectRoute: this.props.selectRoute
	        }),
	        _react3.default.createElement(_routeList2.default, {
	          routes: this.props.lyftRoutes,
	          classStyle: 'lyft',
	          selectRoute: this.props.selectRoute
	        })
	      );
	    }
	  }]);
	
	  return RouteLists;
	}(_react2.Component));
	
	function mapStateToProps(state) {
	  return {
	    uberRoutes: state.routes.uber,
	    lyftRoutes: state.routes.lyft,
	    expandedRoutes: state.expandedRoutes,
	    expandedDirections: state.expandedDirections
	  };
	}
	// All returns return as props to route container
	function mapDispatchToProps(dispatch) {
	  // When selectRoute is called, the result is passed to all reducers
	  return (0, _redux.bindActionCreators)({ selectRoute: _index.selectRoute }, dispatch);
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RouteLists);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 399:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWN0aW9ucy9tYXJrZXJzLmpzPzYyNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfYWN0aXZlX3JvdXRlLmpzPzlkYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfY3VycmVudF9hZGRyZXNzLmpzP2I4MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfY3VycmVudF9jb29yZHMuanM/NGZjNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9kaXJlY3Rpb25zLmpzP2VjMGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfZXhwYW5kZWRfbWFya2VyLmpzP2IzZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfZXhwYW5kZWRfcm91dGVzLmpzP2NmNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfcm91dGVfbWFya2VyLmpzP2M5MDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfcm91dGVzLmpzP2RhODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZXhwYW5kZWRSb3V0ZUxpc3QuanN4PzNkY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcm91dGVMaXN0LmpzeD83NWVkIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXJzL2FjdGl2ZVJvdXRlLmpzeD8yYjAxIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXJzL3JvdXRlTGlzdHMuanN4P2U5ZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz84MjZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBR0Usd0JBQWEsS0FBSyxLQUFMLENBQVc7QUFIMUIsV0FORjtBQVdFO0FBQ0UsbUJBQVEsS0FBSyxLQUFMLENBQVcsVUFEckI7QUFFRSx1QkFBWSxNQUZkO0FBR0Usd0JBQWEsS0FBSyxLQUFMLENBQVc7QUFIMUI7QUFYRixRQURGO0FBbUJEOzs7Ozs7QUFHSCxVQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTztBQUNMLGlCQUFZLE1BQU0sTUFBTixDQUFhLElBRHBCO0FBRUwsaUJBQVksTUFBTSxNQUFOLENBQWEsSUFGcEI7QUFHTCxxQkFBZ0IsTUFBTSxjQUhqQjtBQUlMLHlCQUFvQixNQUFNO0FBSnJCLElBQVA7QUFNRDtBQUNEO0FBQ0EsVUFBUyxrQkFBVCxDQUE0QixRQUE1QixFQUFzQztBQUNwQztBQUNBLFVBQU8sK0JBQW1CLEVBQUUsK0JBQUYsRUFBbkIsRUFBb0MsUUFBcEMsQ0FBUDtBQUNEOzttQkFFYyx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxVQUE3QyxDOzs7Ozs7OztBQ3REZiwwQyIsImZpbGUiOiIwLjU5ZjhlMmM1MmY4MDczZjkxZmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlUm91dGUgPSB0aGlzLnNldEFjdGl2ZVJvdXRlLmJpbmQodGhpcyk7XG4gIH1cbiAgc2V0QWN0aXZlUm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0Um91dGUoe1xuICAgICAgcm91dGU6IHRoaXMucHJvcHMucm91dGUsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5jbGFzc1N0eWxlXG4gICAgfSk7XG4gIH1cbiAgbXNUb1RpbWUobXMpIHtcbiAgICBsZXQgZHVyYXRpb24gPSBuZXcgRGF0ZShtcyksXG4gICAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChkdXJhdGlvbi5nZXRNaW51dGVzKCkpLFxuICAgICAgICBob3VycyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldEhvdXJzKCkpLFxuICAgICAgICB0aW1lT2ZEYXkgPSBob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xuICAgIGhvdXJzID0gaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycztcbiAgICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcyArICcgJyArIHRpbWVPZkRheTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGV0YSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5ldGEvNjApLFxuICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLnJvdW5kKCh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uICsgdGhpcy5wcm9wcy5yb3V0ZS5ldGEpKSoxMDAwLFxuICAgICAgICBldGFNaW51dGVzID0gZXRhIDw9IDEgPyAnbWludXRlJyA6ICdtaW51dGVzJyxcbiAgICAgICAgYXJyaXZhbFRpbWUgPSAodGhpcy5tc1RvVGltZShEYXRlLm5vdygpK3RvdGFsVGltZSkpLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBkaXNjbGFpbWVyID0gdGhpcy5wcm9wcy5jYXJwb29sID8gJ1xcbk1heSBtYWtlIGFkZGl0aW9uYWwgc3RvcHMnIDogJycsXG4gICAgICAgIGltYWdlID0gdGhpcy5wcm9wcy5tYXJrZXIgPyA8aW1nIHNyYz17dGhpcy5wcm9wcy5tYXJrZXJ9IGNsYXNzTmFtZT1cIm1hcmtlci10YWdcIi8+IDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtgbGlzdC1pdGVtICR7dGhpcy5wcm9wcy5jbGFzc1N0eWxlfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0QWN0aXZlUm91dGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWNvc3RcIj57Y29zdH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1uYW1lXCI+e3RoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lfTwvZGl2PlxuICAgICAgICB7aW1hZ2V9XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpdmVyLWV0YVwiPlBpY2t1cDoge2V0YX0ge2V0YU1pbnV0ZXN9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtZHVyYXRpb25cIj5BcnJpdmFsOiB7YXJyaXZhbFRpbWV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2Rpc2NsYWltZXJ9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3hcbiAqKi8iLCJpbXBvcnQge1xuICBTRVRfTUFSS0VSUyxcbiAgU0VUX0VYUEFOREVEX01BUktFUlNcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIHNldE1hcmtlcnMgLT4gcmVkdWNlcl9yb3V0ZV9tYXJrZXJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXJrZXJzKGNvb3Jkcykge1xuICBsZXQgbmV3TWFya2VycyA9IHt9O1xuICBuZXdNYXJrZXJzLnN0YXJ0ID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGNvb3Jkcy5zdGFydCxcbiAgICBhbmltYXRpb246IDJcbiAgfSk7XG4gIG5ld01hcmtlcnMuZW5kID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGNvb3Jkcy5lbmQsXG4gICAgYW5pbWF0aW9uOiAyXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9NQVJLRVJTLFxuICAgIHBheWxvYWQ6IG5ld01hcmtlcnNcbiAgfVxufVxuLy8gc2V0RXhwYW5kZWRNYXJrZXJzIC0+IHJlZHVjZXJfZXhwYW5kZWRfbWFya2VyXG5leHBvcnQgZnVuY3Rpb24gc2V0RXhwYW5kZWRNYXJrZXJzKGNvb3Jkcykge1xuICBsZXQgbmV3TWFya2VycyA9IHt9O1xuXG4gIGZvciAobGV0IGRhdGEgaW4gY29vcmRzKSB7XG4gICAgbGV0IHBTdGFydCA9IGNvb3Jkcy5wcmljZS5zdGFydDtcbiAgICBsZXQgdFN0YXJ0ID0gY29vcmRzLnRpbWUuc3RhcnQ7XG4gICAgbGV0IHBhdGggPSAocFN0YXJ0LmxhdCA9PT0gdFN0YXJ0LmxhdCAmJlxuICAgICAgICAgICAgICAgIHBTdGFydC5sbmcgPT09IHRTdGFydC5sbmcgJiZcbiAgICAgICAgICAgICAgICBjb29yZHMuY1RpbWUgPT09IGNvb3Jkcy5jUHJpY2UpID9cbiAgICAgICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9hc3NldHMvcHJpY2UtdGltZS5zdmcnKSA6XG4gICAgICAgICAgICAgICAoZGF0YSA9PT0gJ3ByaWNlJykgP1xuICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9wcmljZS5zdmcnKSA6XG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbWUuc3ZnJyk7XG5cbiAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogY29vcmRzW2RhdGFdLnN0YXJ0LFxuICAgICAgYW5pbWF0aW9uOiAyLFxuICAgICAgaWNvbjogcGF0aFxuICAgIH0pO1xuICAgIG5ld01hcmtlcnNbZGF0YV0gPSBtYXJrZXJcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9FWFBBTkRFRF9NQVJLRVJTLFxuICAgIHBheWxvYWQ6IG5ld01hcmtlcnNcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYWN0aW9ucy9tYXJrZXJzLmpzXG4gKiovIiwiaW1wb3J0IHtcbiAgUk9VVEVfU0VMRUNURUQsXG4gIFJPVVRFX0RFU0VMRUNURURcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlPXtyb3V0ZTpudWxsLGNsYXNzOm51bGx9LCBhY3Rpb24pIHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBST1VURV9TRUxFQ1RFRDpcbiAgICAgIGNvbnNvbGUubG9nKCdBIHJvdXRlIGhhcyBiZWVuIHNlbGVjdGVkJyk7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICBjYXNlIFJPVVRFX0RFU0VMRUNURUQ6XG4gICAgICBjb25zb2xlLmxvZygnQSByb3V0ZSBoYXMgYmVlbiBkZXNlbGVjdGVkJyk7XG4gICAgICByZXR1cm4ge3JvdXRlOm51bGwsY2xhc3M6bnVsbH07XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9hY3RpdmVfcm91dGUuanNcbiAqKi8iLCJpbXBvcnQge1xuICBTRVRfQUREUkVTU1xufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlPXtzdGFydDpudWxsLGVuZDpudWxsfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BRERSRVNTOlxuICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgY3VycmVudCBhZGRyZXNzIGFzJywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfY3VycmVudF9hZGRyZXNzLmpzXG4gKiovIiwiaW1wb3J0IHtcbiAgUkVDRUlWRV9ST1VURVNfTFlGVCxcbiAgUkVDRUlWRV9ST1VURVNfVUJFUlxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlPXtzdGFydDpudWxsLGVuZDpudWxsfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfUk9VVEVTX1VCRVI6XG4gICAgY2FzZSBSRUNFSVZFX1JPVVRFU19MWUZUOlxuICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgY3VycmVudCBsb2NhdGlvbiBhcycsIGFjdGlvbi5jb29yZHMpO1xuICAgICAgcmV0dXJuIGFjdGlvbi5jb29yZHM7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9jdXJyZW50X2Nvb3Jkcy5qc1xuICoqLyIsImltcG9ydCB7XG4gIFNFVF9ESVJFQ1RJT05TLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlPW51bGwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfRElSRUNUSU9OUzpcbiAgICBjb25zb2xlLmxvZygnR290IG5ldyBkaXJlY3Rpb25zJywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfZGlyZWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7XG4gIFNFVF9FWFBBTkRFRF9NQVJLRVJTLFxuICBSRUNFSVZFX1JPVVRFU19VQkVSLFxuICBSRUNFSVZFX1JPVVRFU19MWUZUXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG4vLyBzdGF0ZSBpcyBub3QgYXBwbGljYXRpb24gc3RhdGUsIG9ubHkgcmVzcG9uc2libGUgZm9yIHJlZHVjZXIgc3RhdGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlPXtwcmljZTpudWxsLHRpbWU6bnVsbH0sIGFjdGlvbikge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9FWFBBTkRFRF9NQVJLRVJTOlxuICAgICAgY29uc29sZS5sb2coJ0V4cGFuZGVkIG1ha2VycyBoYXZlIGJlZW4gZ2VuZXJhdGVkJyk7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgY2FzZSBSRUNFSVZFX1JPVVRFU19MWUZUOlxuICAgIGNhc2UgUkVDRUlWRV9ST1VURVNfVUJFUjpcbiAgICAgIHJldHVybiB7cHJpY2U6bnVsbCx0aW1lOm51bGx9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9leHBhbmRlZF9tYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQge1xuICBOT19FWFBBTkRFRF9ST1VURVMsXG4gIFJFUVVFU1RfUk9VVEVTLFxuICBSRUNFSVZFX0VYUEFOREVEX1JPVVRFUyxcbiAgUkVDRUlWRV9ST1VURVNfTFlGVCxcbiAgUkVDRUlWRV9ST1VURVNfVUJFUlxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuLy8gU2V0dGluZyBzdGF0ZSB0byB0aGlzIGRlZmF1bHQgZmVlbHMgZ2hldHRvLi4uIHByb2JhYmx5IGEgYmV0dGVyIHdheVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGU9e3ByaWNlOm51bGwsdGltZTpudWxsfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIE5PX0VYUEFOREVEX1JPVVRFUzpcbiAgICAgIGNvbnNvbGUubG9nKCdObyBiZXR0ZXIgZGVhbHMgZm91bmQuJylcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBjYXNlIFJFUVVFU1RfUk9VVEVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJpY2U6IG51bGwsXG4gICAgICAgIHRpbWU6IG51bGxcbiAgICAgIH1cbiAgICBjYXNlIFJFQ0VJVkVfRVhQQU5ERURfUk9VVEVTOlxuICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGJldHRlciBkZWFscyEnLCBhY3Rpb24ucm91dGVzKVxuICAgICAgcmV0dXJuIGFjdGlvbi5yb3V0ZXM7XG4gICAgY2FzZSBSRUNFSVZFX1JPVVRFU19MWUZUOlxuICAgIGNhc2UgUkVDRUlWRV9ST1VURVNfVUJFUjpcbiAgICAgIHJldHVybiB7cHJpY2U6bnVsbCx0aW1lOm51bGx9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9leHBhbmRlZF9yb3V0ZXMuanNcbiAqKi8iLCJpbXBvcnQge1xuICBTRVRfTUFSS0VSUyxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbi8vIHN0YXRlIGlzIG5vdCBhcHBsaWNhdGlvbiBzdGF0ZSwgb25seSByZXNwb25zaWJsZSBmb3IgcmVkdWNlciBzdGF0ZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGU9e3N0YXJ0Om51bGwsZW5kOm51bGx9LCBhY3Rpb24pIHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTUFSS0VSUzpcbiAgICAgIGNvbnNvbGUubG9nKCdOZXcgbWFya2VycyBoYXZlIGJlZW4gZ2VuZXJhdGVkJyk7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9yb3V0ZV9tYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQge1xuICBSRVFVRVNUX1JPVVRFUyxcbiAgUkVDRUlWRV9ST1VURVNfVUJFUixcbiAgUkVDRUlWRV9ST1VURVNfTFlGVCxcbiAgSU5WQUxJRF9ST1VURVNfVUJFUixcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlPXt1YmVyOltdLGx5ZnQ6W119LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5WQUxJRF9ST1VURVNfVUJFUjpcbiAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIHJvdXRlIScpXG4gICAgICByZXR1cm4gc3RhdGU7XG5cbiAgICBjYXNlIFJFUVVFU1RfUk9VVEVTOlxuICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3Rpbmcgcm91dGVzLi4uJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHViZXI6IFtdLFxuICAgICAgICBseWZ0OiBbXVxuICAgICAgfTtcbiAgICBjYXNlIFJFQ0VJVkVfUk9VVEVTX1VCRVI6XG4gICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgVWJlciByb3V0ZXMhJywgYWN0aW9uLnJvdXRlcylcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB1YmVyOiBhY3Rpb24ucm91dGVzXG4gICAgICB9KTtcbiAgICBjYXNlIFJFQ0VJVkVfUk9VVEVTX0xZRlQ6XG4gICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgTHlmdCByb3V0ZXMhJywgYWN0aW9uLnJvdXRlcylcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBseWZ0OiBhY3Rpb24ucm91dGVzXG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9yZWR1Y2Vycy9yZWR1Y2VyX3JvdXRlcy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBSb3V0ZSBmcm9tICcuL3JvdXRlLmpzeCc7XG5cbi8vIEZhc3QgYW5kIENoZWFwIGltYWdlc1xubGV0IHRpbWUgPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvdGltZS13LWJhbG9vbi5zdmcnKTtcbmxldCBwcmljZSA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9wcmljZS13LWJhbG9vbi5zdmcnKTtcbmxldCBwcmljZVRpbWUgPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvcHJpY2UtdGltZS13LWJhbG9vbi5zdmcnKTtcblxuY2xhc3MgRXhwYW5kZWRSb3V0ZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgMDogJ2V4cGFuZGVkLXByaWNlJyxcbiAgICAgIDE6ICdleHBhbmRlZC1tb25leSdcbiAgICB9O1xuICB9XG4gIHJlbmRlclJvdXRlcygpIHtcbiAgICBsZXQgcm91dGVzID0gW107XG4gICAgbGV0IGtleSA9IDA7XG4gICAgZm9yIChsZXQgcm91dGUgaW4gdGhpcy5wcm9wcy5yb3V0ZXMpIHtcbiAgICAgIGxldCBtYXJrZXIgPSByb3V0ZSA9PT0gJ3RpbWUnID8gdGltZSA6IHByaWNlO1xuICAgICAgbGV0IGVwcmljZSA9IHRoaXMucHJvcHMucm91dGVzLnByaWNlO1xuICAgICAgbGV0IGV0aW1lID0gdGhpcy5wcm9wcy5yb3V0ZXMudGltZTtcbiAgICAgIGlmIChlcHJpY2UuYXZnX2VzdGltYXRlID09PSBldGltZS5hdmdfZXN0aW1hdGUgJiZcbiAgICAgICAgICBlcHJpY2UuZGlzcGxheV9uYW1lID09PSBldGltZS5kaXNwbGF5X25hbWUgJiZcbiAgICAgICAgICBlcHJpY2UuZHVyYXRpb24gICAgID09PSBldGltZS5kdXJhdGlvbikge1xuICAgICAgICByb3V0ZXMucHVzaChcbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICBrZXk9e2tleSsrfVxuICAgICAgICAgIHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlcy5wcmljZX1cbiAgICAgICAgICBzZWxlY3RSb3V0ZT17dGhpcy5wcm9wcy5zZWxlY3RSb3V0ZX1cbiAgICAgICAgICBjbGFzc1N0eWxlPXtyb3V0ZX1cbiAgICAgICAgICBtYXJrZXI9e3ByaWNlVGltZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXNbcm91dGVdICE9PSBudWxsKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKDxSb3V0ZVxuICAgICAgICAgIGtleT17a2V5Kyt9XG4gICAgICAgICAgcm91dGU9e3RoaXMucHJvcHMucm91dGVzW3JvdXRlXX1cbiAgICAgICAgICBzZWxlY3RSb3V0ZT17dGhpcy5wcm9wcy5zZWxlY3RSb3V0ZX1cbiAgICAgICAgICBjbGFzc1N0eWxlPXtyb3V0ZX1cbiAgICAgICAgICBtYXJrZXI9e21hcmtlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm91dGVzO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlcy5wcmljZSB8fCB0aGlzLnByb3BzLnJvdXRlcy50aW1lKSB7XG4gICAgICByb3V0ZXMgPSB0aGlzLnJlbmRlclJvdXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBhbmRlZC1yb3V0ZXNcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtyb3V0ZXN9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGVkUm91dGVMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2V4cGFuZGVkUm91dGVMaXN0LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBSb3V0ZSBmcm9tICcuL3JvdXRlLmpzeCc7XG5cbmNsYXNzIFJvdXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1YmVyOiAndWJlci1saXN0LWNvbnRhaW5lcicsXG4gICAgICBseWZ0OiAnbHlmdC1saXN0LWNvbnRhaW5lcicsXG4gICAgfTtcbiAgfVxuICByZW5kZXJSb3V0ZXMoKSB7XG4gICAgLy8gRGl2IGZvcm1hdHRpbmcgaW5jbHVkaW5nIGNhcnBvb2wgZGlzY2xhaW1lciBmb3IgY2VydGFpbiBzZXJ2aWNlc1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJvdXRlcy5tYXAoKHJvdXRlKSA9PiB7XG4gICAgICBpZiAocm91dGUuaGlnaF9lc3RpbWF0ZSkge1xuICAgICAgICBsZXQgY2FycG9vbCA9IGZhbHNlO1xuICAgICAgICBpZiAocm91dGUuZGlzcGxheV9uYW1lID09PSAnVWJlclBPT0wnIHx8IHJvdXRlLmRpc3BsYXlfbmFtZSA9PT0gJ0x5ZnQgTGluZScpIHsgY2FycG9vbCA9IHRydWU7IH1cbiAgICAgICAgcmV0dXJuIDxSb3V0ZVxuICAgICAgICAgIGtleT17cm91dGUuZGlzcGxheV9uYW1lfVxuICAgICAgICAgIHJvdXRlPXtyb3V0ZX1cbiAgICAgICAgICBzZWxlY3RSb3V0ZT17dGhpcy5wcm9wcy5zZWxlY3RSb3V0ZX1cbiAgICAgICAgICBjbGFzc1N0eWxlPXt0aGlzLnByb3BzLmNsYXNzU3R5bGV9XG4gICAgICAgICAgY2FycG9vbD17Y2FycG9vbH1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGUgPSB0aGlzLnN0YXRlW3RoaXMucHJvcHMuY2xhc3NTdHlsZV07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJSb3V0ZXMoKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3JvdXRlTGlzdC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRlc2VsZWN0Um91dGUgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuY2xhc3MgQWN0aXZlUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgdWJlcjogJ3ViZXInLFxuICAgICAgICBseWZ0OiAnbHlmdCcsXG4gICAgICAgIHByaWNlOiAncHJpY2UnLFxuICAgICAgICB0aW1lOiAndGltZSdcbiAgICAgIH0sXG4gICAgICBvcmRlckNhYjogbnVsbFxuICAgIH1cbiAgICB0aGlzLm9yZGVyUmlkZSA9IHRoaXMub3JkZXJSaWRlLmJpbmQodGhpcyk7XG4gIH1cbiAgb3JkZXJSaWRlKCkge1xuICAgIGxldCBzdGFydEFkZCA9IHRoaXMucHJvcHMuY3VycmVudEFkZHJlc3Muc3RhcnQsXG4gICAgICAgIGVuZEFkZCA9IHRoaXMucHJvcHMuY3VycmVudEFkZHJlc3MuZW5kLFxuICAgICAgICBzdGFydExhdCA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5zdGFydC5sYXQsXG4gICAgICAgIHN0YXJ0TG5nID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLnN0YXJ0LmxuZyxcbiAgICAgICAgZW5kTGF0ID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLmVuZC5sYXQsXG4gICAgICAgIGVuZExuZyA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5lbmQubG5nO1xuICAgIC8vIEFzc2lnbnMgb3JkZXIgdXJsIHRvIFViZXJcbiAgICBpZih0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZS5tYXRjaCgvdWJlci9pKSkge1xuICAgICAgbGV0IHViZXJVcmwgPSBcInViZXI6Ly8/Y2xpZW50X2lkPTM3eUhHMS14OGl3bWUyZmpvZ3hvYTN3VV80bjJ2V2Q1ZXhDcEVCOHUmYWN0aW9uPXNldFBpY2t1cFwiO1xuICAgICAgbGV0IHViZXJDb29yZHMgPSBgJnBpY2t1cFtsYXRpdHVkZV09JHtzdGFydExhdH0mcGlja3VwW2xvbmdpdHVkZV09JHtzdGFydExuZ30mcGlja3VwW2Zvcm1hdHRlZF9hZGRyZXNzXT0ke2VuY29kZVVSSUNvbXBvbmVudChzdGFydEFkZCl9JmRyb3BvZmZbbGF0aXR1ZGVdPSR7ZW5kTGF0fSZkcm9wb2ZmW2xvbmdpdHVkZV09JHtlbmRMbmd9JmRyb3BvZmZbZm9ybWF0dGVkX2FkZHJlc3NdPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVuZEFkZCl9JnByb2R1Y3RfaWQ9YTExMTFjOGMtYzcyMC00NmMzLTg1MzQtMmZjZGQ3MzAwNDBkYFxuICAgICAgbGV0IG9yZGVyVWJlciA9IHViZXJVcmwgKyB1YmVyQ29vcmRzO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJDYWI6IG9yZGVyVWJlcn0pXG4gICAgICAvLyBBc3NpZ25zIG9yZGVyIHVybCB0byBseWZ0XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZS5tYXRjaCgvbHlmdC9pKSkge1xuICAgICAgbGV0IGx5ZnRVcmwgPSBgbHlmdDovL3JpZGV0eXBlP2lkPSR7dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWUucmVwbGFjZSgnICcsICdfJykudG9Mb3dlckNhc2UoKX0mcGFydG5lcj1fMmJMQzJYOFlmRThiVkMxcWNMYTB2T1F1dDVyMWxCX2A7XG4gICAgICBsZXQgbHlmdENvb2RzID0gYCZwaWNrdXBbbGF0aXR1ZGVdPSR7c3RhcnRMYXR9JnBpY2t1cFtsb25naXR1ZGVdPSR7c3RhcnRMbmd9JmRlc3RpbmF0aW9uW2xhdGl0dWRlXT0ke2VuZExhdH0mZGVzdGluYXRpb25bbG9uZ2l0dWRlXT0ke2VuZExuZ31gXG4gICAgICBsZXQgb3JkZXJMeWZ0ID0gbHlmdFVybCArIGx5ZnRDb29kcztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVyQ2FiOiBvcmRlckx5ZnR9KVxuICAgIH1cbiAgfVxuICBtc1RvVGltZShtcykge1xuICAgIGxldCBkdXJhdGlvbiA9IG5ldyBEYXRlKG1zKSxcbiAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldE1pbnV0ZXMoKSksXG4gICAgICAgIGhvdXJzID0gcGFyc2VJbnQoZHVyYXRpb24uZ2V0SG91cnMoKSksXG4gICAgICAgIHRpbWVPZkRheSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG4gICAgaG91cnMgPSBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuICAgIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgJyAnICsgdGltZU9mRGF5O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBGb3JtYXR0aW5nIGZvciBkaXNwbGF5Li4uY291bGQgYmUgZG9uZSBiZXR0ZXI/XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlKSB7IHJldHVybiA8ZGl2PjwvZGl2PjsgfVxuICAgIGxldCBldGEgPSBNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuZXRhLzYwKSxcbiAgICAgICAgdG90YWxUaW1lID0gTWF0aC5yb3VuZCgodGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbiArIHRoaXMucHJvcHMucm91dGUuZXRhKSkqMTAwMCxcbiAgICAgICAgYXJyaXZhbFRpbWUgPSAodGhpcy5tc1RvVGltZShEYXRlLm5vdygpK3RvdGFsVGltZSkpLFxuICAgICAgICBldGFNaW51dGVzID0gZXRhIDw9IDEgPyAnbWludXRlJyA6ICdtaW51dGVzJyxcbiAgICAgICAgY29zdCA9IHRoaXMucHJvcHMucm91dGUuaGlnaF9lc3RpbWF0ZSA/ICckJyArIChNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuaGlnaF9lc3RpbWF0ZS8xMDApKSA6ICdNZXRlcmVkJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gdGhpcy5zdGF0ZS5zdHlsZVt0aGlzLnByb3BzLnN0eWxlXSxcbiAgICAgICAgY2xhc3NlcyA9ICdzZWxlY3RlZC1yb3V0ZS1jb250YWluZXIgJyArIGJhY2tncm91bmRDb2xvcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlc2VsZWN0Um91dGV9IGNsYXNzTmFtZT1cImxpZ2h0Ym94LWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9oMT5cbiAgICAgICAgICA8aDE+e2Nvc3R9PC9oMT5cbiAgICAgICAgICA8cD5QaWNrdXA6IHtldGF9IHtldGFNaW51dGVzfTwvcD5cbiAgICAgICAgICA8cD5BcnJpdmFsOiB7YXJyaXZhbFRpbWV9PC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5zdGF0ZS5vcmRlckNhYn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm9yZGVyLWJ0blwiIG9uQ2xpY2s9e3RoaXMub3JkZXJSaWRlfT5PcmRlciBSaWRlPC9idXR0b24+XG4gICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRBZGRyZXNzOiBzdGF0ZS5jdXJyZW50QWRkcmVzcyxcbiAgICBjdXJyZW50Q29vcmRzOiBzdGF0ZS5jdXJyZW50Q29vcmRzLFxuICAgIHJvdXRlOiBzdGF0ZS5hY3RpdmVSb3V0ZS5yb3V0ZSxcbiAgICBzdHlsZTogc3RhdGUuYWN0aXZlUm91dGUuc3R5bGVcbiAgfTtcbn1cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgZGVzZWxlY3RSb3V0ZSB9LCBkaXNwYXRjaClcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFjdGl2ZVJvdXRlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbnRhaW5lcnMvYWN0aXZlUm91dGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZWxlY3RSb3V0ZSB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuLy8gTWFrZXMgc3VyZSBhY3Rpb24gZmxvd3MgdGhyb3VnaCBhbGwgcmVkdWNlcnMgdG8gbWFpbnRhaW4gc3RhdGVcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFJvdXRlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlTGlzdC5qc3gnO1xuaW1wb3J0IEV4cGFuZGVkUm91dGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZXhwYW5kZWRSb3V0ZUxpc3QuanN4JztcblxuY2xhc3MgUm91dGVMaXN0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZXhwYW5kZWRSb3V0ZXMsXG4gICAgICAgIGxpc3RNZXNzYWdlID0gPGgxIGNsYXNzTmFtZT1cImVtcHR5LW1lc3NhZ2VcIj5TZWFyY2ggZm9yIHJpZGVzPC9oMT47XG4gICAgaWYgKHRoaXMucHJvcHMudWJlclJvdXRlcy5sZW5ndGggfHwgdGhpcy5wcm9wcy5seWZ0Um91dGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHN0eWxlID0geyBoZWlnaHQ6ICcwJScsIG1hcmdpbjogMCwgb3BhY2l0eTogMCB9XG4gICAgICBsaXN0TWVzc2FnZSA9IDxoMSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cImVtcHR5LW1lc3NhZ2VcIj5TZWFyY2ggZm9yIHJpZGVzPC9oMT47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgIHtsaXN0TWVzc2FnZX1cbiAgICAgICAgPEV4cGFuZGVkUm91dGVMaXN0XG4gICAgICAgICAgcm91dGVzPXt0aGlzLnByb3BzLmV4cGFuZGVkUm91dGVzfVxuICAgICAgICAgIHNlbGVjdFJvdXRlPXt0aGlzLnByb3BzLnNlbGVjdFJvdXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxSb3V0ZUxpc3RcbiAgICAgICAgICByb3V0ZXM9e3RoaXMucHJvcHMudWJlclJvdXRlc31cbiAgICAgICAgICBjbGFzc1N0eWxlPXsndWJlcid9XG4gICAgICAgICAgc2VsZWN0Um91dGU9e3RoaXMucHJvcHMuc2VsZWN0Um91dGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlTGlzdFxuICAgICAgICAgIHJvdXRlcz17dGhpcy5wcm9wcy5seWZ0Um91dGVzfVxuICAgICAgICAgIGNsYXNzU3R5bGU9eydseWZ0J31cbiAgICAgICAgICBzZWxlY3RSb3V0ZT17dGhpcy5wcm9wcy5zZWxlY3RSb3V0ZX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1YmVyUm91dGVzOiBzdGF0ZS5yb3V0ZXMudWJlcixcbiAgICBseWZ0Um91dGVzOiBzdGF0ZS5yb3V0ZXMubHlmdCxcbiAgICBleHBhbmRlZFJvdXRlczogc3RhdGUuZXhwYW5kZWRSb3V0ZXMsXG4gICAgZXhwYW5kZWREaXJlY3Rpb25zOiBzdGF0ZS5leHBhbmRlZERpcmVjdGlvbnNcbiAgfTtcbn1cbi8vIEFsbCByZXR1cm5zIHJldHVybiBhcyBwcm9wcyB0byByb3V0ZSBjb250YWluZXJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAvLyBXaGVuIHNlbGVjdFJvdXRlIGlzIGNhbGxlZCwgdGhlIHJlc3VsdCBpcyBwYXNzZWQgdG8gYWxsIHJlZHVjZXJzXG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzZWxlY3RSb3V0ZSB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlTGlzdHMpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29udGFpbmVycy9yb3V0ZUxpc3RzLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zYXNzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=