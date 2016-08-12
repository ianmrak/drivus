webpackHotUpdate(0,{

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
	        price: 'price-color',
	        time: 'time-color'
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9hY3RpdmVSb3V0ZS5qc3g/MmIwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSx3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0dBQ1gsS0FEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxjQUFPO0FBQ0wsZUFBTSxNQUREO0FBRUwsZUFBTSxNQUZEO0FBR0wsZ0JBQU8sYUFIRjtBQUlMLGVBQU07QUFKRCxRQURJO0FBT1gsaUJBQVU7QUFQQyxNQUFiO0FBU0EsV0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakI7QUFYaUI7QUFZbEI7Ozs7aUNBQ1c7QUFDVixXQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixLQUF6QztBQUFBLFdBQ0ksU0FBUyxLQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEdBRHZDO0FBQUEsV0FFSSxXQUFXLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsS0FBekIsQ0FBK0IsR0FGOUM7QUFBQSxXQUdJLFdBQVcsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUF6QixDQUErQixHQUg5QztBQUFBLFdBSUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEdBQXpCLENBQTZCLEdBSjFDO0FBQUEsV0FLSSxTQUFTLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsR0FBekIsQ0FBNkIsR0FMMUM7QUFNQTtBQUNBLFdBQUcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixZQUFqQixDQUE4QixLQUE5QixDQUFvQyxPQUFwQyxDQUFILEVBQWlEO0FBQy9DLGFBQUksVUFBVSw2RUFBZDtBQUNBLGFBQUksb0NBQWtDLFFBQWxDLDJCQUFnRSxRQUFoRSxtQ0FBc0csbUJBQW1CLFFBQW5CLENBQXRHLDJC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S0FBSyxTQUFyQztBQUFBO0FBQUE7QUFERDtBQUxKO0FBRkYsUUFERjtBQWNEOzs7Ozs7QUFHSCxVQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTztBQUNMLHFCQUFnQixNQUFNLGNBRGpCO0FBRUwsb0JBQWUsTUFBTSxhQUZoQjtBQUdMLFlBQU8sTUFBTSxXQUFOLENBQWtCLEtBSHBCO0FBSUwsWUFBTyxNQUFNLFdBQU4sQ0FBa0I7QUFKcEIsSUFBUDtBQU1EO0FBQ0QsVUFBUyxrQkFBVCxDQUE0QixRQUE1QixFQUFzQztBQUNwQyxVQUFPLCtCQUFtQixFQUFFLG1DQUFGLEVBQW5CLEVBQXNDLFFBQXRDLENBQVA7QUFDRDttQkFDYyx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxXQUE3QyxDIiwiZmlsZSI6IjAuMTljNDE0ZGExOTJhNmEzNTlmNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZGVzZWxlY3RSb3V0ZSB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5jbGFzcyBBY3RpdmVSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB1YmVyOiAndWJlcicsXG4gICAgICAgIGx5ZnQ6ICdseWZ0JyxcbiAgICAgICAgcHJpY2U6ICdwcmljZS1jb2xvcicsXG4gICAgICAgIHRpbWU6ICd0aW1lLWNvbG9yJ1xuICAgICAgfSxcbiAgICAgIG9yZGVyQ2FiOiBudWxsXG4gICAgfVxuICAgIHRoaXMub3JkZXJSaWRlID0gdGhpcy5vcmRlclJpZGUuYmluZCh0aGlzKTtcbiAgfVxuICBvcmRlclJpZGUoKSB7XG4gICAgbGV0IHN0YXJ0QWRkID0gdGhpcy5wcm9wcy5jdXJyZW50QWRkcmVzcy5zdGFydCxcbiAgICAgICAgZW5kQWRkID0gdGhpcy5wcm9wcy5jdXJyZW50QWRkcmVzcy5lbmQsXG4gICAgICAgIHN0YXJ0TGF0ID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLnN0YXJ0LmxhdCxcbiAgICAgICAgc3RhcnRMbmcgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuc3RhcnQubG5nLFxuICAgICAgICBlbmRMYXQgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuZW5kLmxhdCxcbiAgICAgICAgZW5kTG5nID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLmVuZC5sbmc7XG4gICAgLy8gQXNzaWducyBvcmRlciB1cmwgdG8gVWJlclxuICAgIGlmKHRoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lLm1hdGNoKC91YmVyL2kpKSB7XG4gICAgICBsZXQgdWJlclVybCA9IFwidWJlcjovLz9jbGllbnRfaWQ9Mzd5SEcxLXg4aXdtZTJmam9neG9hM3dVXzRuMnZXZDVleENwRUI4dSZhY3Rpb249c2V0UGlja3VwXCI7XG4gICAgICBsZXQgdWJlckNvb3JkcyA9IGAmcGlja3VwW2xhdGl0dWRlXT0ke3N0YXJ0TGF0fSZwaWNrdXBbbG9uZ2l0dWRlXT0ke3N0YXJ0TG5nfSZwaWNrdXBbZm9ybWF0dGVkX2FkZHJlc3NdPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0YXJ0QWRkKX0mZHJvcG9mZltsYXRpdHVkZV09JHtlbmRMYXR9JmRyb3BvZmZbbG9uZ2l0dWRlXT0ke2VuZExuZ30mZHJvcG9mZltmb3JtYXR0ZWRfYWRkcmVzc109JHtlbmNvZGVVUklDb21wb25lbnQoZW5kQWRkKX0mcHJvZHVjdF9pZD1hMTExMWM4Yy1jNzIwLTQ2YzMtODUzNC0yZmNkZDczMDA0MGRgXG4gICAgICBsZXQgb3JkZXJVYmVyID0gdWJlclVybCArIHViZXJDb29yZHM7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcmRlckNhYjogb3JkZXJVYmVyfSlcbiAgICAgIC8vIEFzc2lnbnMgb3JkZXIgdXJsIHRvIGx5ZnRcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lLm1hdGNoKC9seWZ0L2kpKSB7XG4gICAgICBsZXQgbHlmdFVybCA9IGBseWZ0Oi8vcmlkZXR5cGU/aWQ9JHt0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZS5yZXBsYWNlKCcgJywgJ18nKS50b0xvd2VyQ2FzZSgpfSZwYXJ0bmVyPV8yYkxDMlg4WWZFOGJWQzFxY0xhMHZPUXV0NXIxbEJfYDtcbiAgICAgIGxldCBseWZ0Q29vZHMgPSBgJnBpY2t1cFtsYXRpdHVkZV09JHtzdGFydExhdH0mcGlja3VwW2xvbmdpdHVkZV09JHtzdGFydExuZ30mZGVzdGluYXRpb25bbGF0aXR1ZGVdPSR7ZW5kTGF0fSZkZXN0aW5hdGlvbltsb25naXR1ZGVdPSR7ZW5kTG5nfWBcbiAgICAgIGxldCBvcmRlckx5ZnQgPSBseWZ0VXJsICsgbHlmdENvb2RzO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJDYWI6IG9yZGVyTHlmdH0pXG4gICAgfVxuICB9XG4gIG1zVG9UaW1lKG1zKSB7XG4gICAgbGV0IGR1cmF0aW9uID0gbmV3IERhdGUobXMpLFxuICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQoZHVyYXRpb24uZ2V0TWludXRlcygpKSxcbiAgICAgICAgaG91cnMgPSBwYXJzZUludChkdXJhdGlvbi5nZXRIb3VycygpKSxcbiAgICAgICAgdGltZU9mRGF5ID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcbiAgICBob3VycyA9IGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnM7XG4gICAgbWludXRlcyA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICByZXR1cm4gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyAnICcgKyB0aW1lT2ZEYXk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIEZvcm1hdHRpbmcgZm9yIGRpc3BsYXkuLi5jb3VsZCBiZSBkb25lIGJldHRlcj9cbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGUpIHsgcmV0dXJuIDxkaXY+PC9kaXY+OyB9XG4gICAgbGV0IGV0YSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5ldGEvNjApLFxuICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLnJvdW5kKCh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uICsgdGhpcy5wcm9wcy5yb3V0ZS5ldGEpKSoxMDAwLFxuICAgICAgICBhcnJpdmFsVGltZSA9ICh0aGlzLm1zVG9UaW1lKERhdGUubm93KCkrdG90YWxUaW1lKSksXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnN0YXRlLnN0eWxlW3RoaXMucHJvcHMuc3R5bGVdLFxuICAgICAgICBjbGFzc2VzID0gJ3NlbGVjdGVkLXJvdXRlLWNvbnRhaW5lciAnICsgYmFja2dyb3VuZENvbG9yO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMuZGVzZWxlY3RSb3V0ZX0gY2xhc3NOYW1lPVwibGlnaHRib3gtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZX08L2gxPlxuICAgICAgICAgIDxoMT57Y29zdH08L2gxPlxuICAgICAgICAgIDxwPlBpY2t1cDoge2V0YX0ge2V0YU1pbnV0ZXN9PC9wPlxuICAgICAgICAgIDxwPkFycml2YWw6IHthcnJpdmFsVGltZX08L3A+XG4gICAgICAgICAgICA8YSBocmVmPXt0aGlzLnN0YXRlLm9yZGVyQ2FifSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICA8YnV0dG9uIGlkPVwib3JkZXItYnRuXCIgb25DbGljaz17dGhpcy5vcmRlclJpZGV9Pk9yZGVyIFJpZGU8L2J1dHRvbj5cbiAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudEFkZHJlc3M6IHN0YXRlLmN1cnJlbnRBZGRyZXNzLFxuICAgIGN1cnJlbnRDb29yZHM6IHN0YXRlLmN1cnJlbnRDb29yZHMsXG4gICAgcm91dGU6IHN0YXRlLmFjdGl2ZVJvdXRlLnJvdXRlLFxuICAgIHN0eWxlOiBzdGF0ZS5hY3RpdmVSb3V0ZS5zdHlsZVxuICB9O1xufVxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBkZXNlbGVjdFJvdXRlIH0sIGRpc3BhdGNoKVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWN0aXZlUm91dGUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29udGFpbmVycy9hY3RpdmVSb3V0ZS5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9