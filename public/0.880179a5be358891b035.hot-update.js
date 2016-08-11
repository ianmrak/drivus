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
	          { className: 'route-cost', style: this.props.priceStyle },
	          cost,
	          ' ',
	          this.props.surgeNotice
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRLEUsRUFBSTtBQUNYLFdBQUksV0FBVyxJQUFJLElBQUosQ0FBUyxFQUFULENBQWY7QUFBQSxXQUNJLFVBQVUsU0FBUyxTQUFTLFVBQVQsRUFBVCxDQURkO0FBQUEsV0FFSSxRQUFRLFNBQVMsU0FBUyxRQUFULEVBQVQsQ0FGWjtBQUFBLFdBR0ksWUFBWSxTQUFTLEVBQVQsR0FBYyxJQUFkLEdBQXFCLElBSHJDO0FBSUEsZUFBUSxRQUFRLEVBQVIsR0FBYSxRQUFRLEVBQXJCLEdBQTBCLEtBQWxDO0FBQ0EsaUJBQVcsVUFBVSxFQUFYLEdBQWlCLE1BQU0sT0FBdkIsR0FBaUMsT0FBM0M7QUFDQSxjQUFPLFFBQVEsR0FBUixHQUFjLE9BQWQsR0FBd0IsR0FBeEIsR0FBOEIsU0FBckM7QUFDRDs7OzhCQUNRO0FBQ1AsV0FBSSxNQUFNLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBcUIsRUFBaEMsQ0FBVjtBQUFBLFdBQ0ksWUFBWSxLQUFLLEtBQUwsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFFBQWpCLEdBQTRCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBekQsSUFBK0QsSUFEL0U7QUFBQSxXQUVJLGFBQWEsT0FBTyxDQUFQLEdBQVcsUUFBWCxHQUFzQixTQUZ2QztBQUFBLFdBR0ksY0FBZSxLQUFLLFFBQUwsQ0FBYyxLQUFLLEdBQUwsS0FBVyxTQUF6QixDQUhuQjtBQUFBLFdBSUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQWlDLE1BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUErQixHQUExQyxDQUF4QyxHQUEwRixTQUpyRztBQUFBLFdBS0ksYUFBYSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLDZCQUFyQixHQUFxRCxFQUx0RTtBQUFBLFdBTUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLHVDQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsTUFBckIsRUFBNkIsV0FBVSxZQUF2QyxHQUFwQixHQUE0RSxJQU54RjtBQU9BLGNBQ0U7QUFBQTtBQUFBLFdBQUksMEJBQXdCLEtBQUssS0FBTCxDQUFXLFVBQXZDO0FBQ0Usb0JBQVMsS0FBSyxjQURoQjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZixFQUE0QixPQUFPLEtBQUssS0FBTCxDQUFXLFVBQTlDO0FBQTJELGVBQTNEO0FBQUE7QUFBa0UsZ0JBQUssS0FBTCxDQUFXO0FBQTdFLFVBRkY7QUFHRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFlBQWY7QUFBNkIsZ0JBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUI7QUFBOUMsVUFIRjtBQUlHLGNBSkg7QUFLRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZUFBSyxXQUFVLFlBQWY7QUFBQTtBQUFxQyxnQkFBckM7QUFBQTtBQUEyQztBQUEzQyxZQURBO0FBRUE7QUFBQTtBQUFBLGVBQUssV0FBVSxnQkFBZjtBQUFBO0FBQTBDO0FBQTFDO0FBRkEsVUFMRjtBQVNFO0FBQUE7QUFBQSxhQUFNLFdBQVUsWUFBaEI7QUFBOEI7QUFBOUI7QUFURixRQURGO0FBYUQ7Ozs7OzttQkFHWSxLIiwiZmlsZSI6IjAuODgwMTc5YTViZTM1ODg5MWIwMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRBY3RpdmVSb3V0ZSA9IHRoaXMuc2V0QWN0aXZlUm91dGUuYmluZCh0aGlzKTtcbiAgfVxuICBzZXRBY3RpdmVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RSb3V0ZSh7XG4gICAgICByb3V0ZTogdGhpcy5wcm9wcy5yb3V0ZSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLmNsYXNzU3R5bGVcbiAgICB9KTtcbiAgfVxuICBtc1RvVGltZShtcykge1xuICAgIGxldCBkdXJhdGlvbiA9IG5ldyBEYXRlKG1zKSxcbiAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldE1pbnV0ZXMoKSksXG4gICAgICAgIGhvdXJzID0gcGFyc2VJbnQoZHVyYXRpb24uZ2V0SG91cnMoKSksXG4gICAgICAgIHRpbWVPZkRheSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG4gICAgaG91cnMgPSBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuICAgIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgJyAnICsgdGltZU9mRGF5O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZXRhID0gTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmV0YS82MCksXG4gICAgICAgIHRvdGFsVGltZSA9IE1hdGgucm91bmQoKHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24gKyB0aGlzLnByb3BzLnJvdXRlLmV0YSkpKjEwMDAsXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBhcnJpdmFsVGltZSA9ICh0aGlzLm1zVG9UaW1lKERhdGUubm93KCkrdG90YWxUaW1lKSksXG4gICAgICAgIGNvc3QgPSB0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUgPyAnJCcgKyAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUvMTAwKSkgOiAnTWV0ZXJlZCcsXG4gICAgICAgIGRpc2NsYWltZXIgPSB0aGlzLnByb3BzLmNhcnBvb2wgPyAnXFxuTWF5IG1ha2UgYWRkaXRpb25hbCBzdG9wcycgOiAnJyxcbiAgICAgICAgaW1hZ2UgPSB0aGlzLnByb3BzLm1hcmtlciA/IDxpbWcgc3JjPXt0aGlzLnByb3BzLm1hcmtlcn0gY2xhc3NOYW1lPVwibWFya2VyLXRhZ1wiLz4gOiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtgbGlzdC1pdGVtICR7dGhpcy5wcm9wcy5jbGFzc1N0eWxlfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0QWN0aXZlUm91dGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWNvc3RcIiBzdHlsZT17dGhpcy5wcm9wcy5wcmljZVN0eWxlfT57Y29zdH0ge3RoaXMucHJvcHMuc3VyZ2VOb3RpY2V9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtbmFtZVwiPnt0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZX08L2Rpdj5cbiAgICAgICAge2ltYWdlfVxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaXZlci1ldGFcIj5QaWNrdXA6IHtldGF9IHtldGFNaW51dGVzfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWR1cmF0aW9uXCI+QXJyaXZhbDoge2Fycml2YWxUaW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPntkaXNjbGFpbWVyfTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvcm91dGUuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==