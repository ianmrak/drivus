webpackHotUpdate(0,{

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
	          var priceStyle = '';
	          var surgeNotice = '';
	          // if (route.price_multiplier > 1) {
	          //   priceStyle = {color:'yellow'};
	          //   surgeNotice = '- ' + route.price_multiplier + ' surge';
	          // }
	          // if (route.price_multiplier > 2) {
	          //   priceStyle = {color:'orangered'};
	          // }
	          var carpool = false;
	          if (route.display_name === 'UberPOOL' || route.display_name === 'Lyft Line') {
	            carpool = true;
	          }
	          return _react3.default.createElement(_route2.default, {
	            surgeNotice: surgeNotice,
	            priceStyle: priceStyle,
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZUxpc3QuanN4Pzc1ZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTs7Ozs7O0FBSUUsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhGQUNYLEtBRFc7O0FBRWpCLFdBQUssS0FBTCxHQUFhO0FBQ1gsYUFBTSxxQkFESztBQUVYLGFBQU07QUFGSyxNQUFiO0FBRmlCO0FBTWxCOzs7O29DQUNjO0FBQUE7O0FBQ2I7QUFDQSxjQUFPLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsR0FBbEIsQ0FBc0IsVUFBQyxLQUFELEVBQVc7QUFDdEMsYUFBSSxNQUFNLGFBQVYsRUFBeUI7QUFDdkIsZUFBSSxhQUFhLEVBQWpCO0FBQ0EsZUFBSSxjQUFjLEVBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFJLFVBQVUsS0FBZDtBQUNBLGVBQUksTUFBTSxZQUFOLEtBQXVCLFVBQXZCLElBQXFDLE1BQU0sWUFBTixLQUF1QixXQUFoRSxFQUE2RTtBQUFFLHVCQUFVLElBQVY7QUFBaUI7QUFDaEcsa0JBQU87QUFDTCwwQkFBYSxXQURSO0FBRUwseUJBQVksVUFGUDtBQUdMLGtCQUFLLE1BQU0sWUFITjtBQUlMLG9CQUFPLEtBSkY7QUFLTCwwQkFBYSxPQUFLLEtBQUwsQ0FBVyxXQUxuQjtBQU1MLHlCQUFZLE9BQUssS0FBTCxDQUFXLFVBTmxCO0FBT0wsc0JBQVM7QUFQSixhQUFQO0FBU0Q7QUFDRixRQXZCTSxDQUFQO0FBd0JEOzs7OEJBQ1E7QUFDUCxXQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsVUFBdEIsQ0FBWjtBQUNBLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVyxLQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUNHLGdCQUFLLFlBQUw7QUFESDtBQURGLFFBREY7QUFPRDs7Ozs7O21CQUdZLFMiLCJmaWxlIjoiMC44OTQ4NTAxZDRlMzBlZWEyZWZiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vcm91dGUuanN4JztcblxuY2xhc3MgUm91dGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHViZXI6ICd1YmVyLWxpc3QtY29udGFpbmVyJyxcbiAgICAgIGx5ZnQ6ICdseWZ0LWxpc3QtY29udGFpbmVyJyxcbiAgICB9O1xuICB9XG4gIHJlbmRlclJvdXRlcygpIHtcbiAgICAvLyBEaXYgZm9ybWF0dGluZyBpbmNsdWRpbmcgY2FycG9vbCBkaXNjbGFpbWVyIGZvciBjZXJ0YWluIHNlcnZpY2VzXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucm91dGVzLm1hcCgocm91dGUpID0+IHtcbiAgICAgIGlmIChyb3V0ZS5oaWdoX2VzdGltYXRlKSB7XG4gICAgICAgIGxldCBwcmljZVN0eWxlID0gJyc7XG4gICAgICAgIGxldCBzdXJnZU5vdGljZSA9ICcnO1xuICAgICAgICAvLyBpZiAocm91dGUucHJpY2VfbXVsdGlwbGllciA+IDEpIHtcbiAgICAgICAgLy8gICBwcmljZVN0eWxlID0ge2NvbG9yOid5ZWxsb3cnfTtcbiAgICAgICAgLy8gICBzdXJnZU5vdGljZSA9ICctICcgKyByb3V0ZS5wcmljZV9tdWx0aXBsaWVyICsgJyBzdXJnZSc7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHJvdXRlLnByaWNlX211bHRpcGxpZXIgPiAyKSB7XG4gICAgICAgIC8vICAgcHJpY2VTdHlsZSA9IHtjb2xvcjonb3JhbmdlcmVkJ307XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IGNhcnBvb2wgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJvdXRlLmRpc3BsYXlfbmFtZSA9PT0gJ1ViZXJQT09MJyB8fCByb3V0ZS5kaXNwbGF5X25hbWUgPT09ICdMeWZ0IExpbmUnKSB7IGNhcnBvb2wgPSB0cnVlOyB9XG4gICAgICAgIHJldHVybiA8Um91dGVcbiAgICAgICAgICBzdXJnZU5vdGljZT17c3VyZ2VOb3RpY2V9XG4gICAgICAgICAgcHJpY2VTdHlsZT17cHJpY2VTdHlsZX1cbiAgICAgICAgICBrZXk9e3JvdXRlLmRpc3BsYXlfbmFtZX1cbiAgICAgICAgICByb3V0ZT17cm91dGV9XG4gICAgICAgICAgc2VsZWN0Um91dGU9e3RoaXMucHJvcHMuc2VsZWN0Um91dGV9XG4gICAgICAgICAgY2xhc3NTdHlsZT17dGhpcy5wcm9wcy5jbGFzc1N0eWxlfVxuICAgICAgICAgIGNhcnBvb2w9e2NhcnBvb2x9XG4gICAgICAgICAgLz5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHN0eWxlID0gdGhpcy5zdGF0ZVt0aGlzLnByb3BzLmNsYXNzU3R5bGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGV9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMucmVuZGVyUm91dGVzKCl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZUxpc3QuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==