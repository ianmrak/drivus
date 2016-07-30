import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';

import App from './components/app.jsx';
import reducers from './reducers';
import css from '../sass/style.scss';

const store = createStore(reducers);

// Provider store must be set up in order for redux data to work correctly
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

/* replace <App /> with
  <Router history={browserHistory} routes={routes} />
 make new file -> routes.js

 import React from 'react';
 import { Route, IndexRoute } from 'react-router'

 import App from './components/app'

** Routing components are nestable - neat **
 export default (
 <Route path="/" component={App}>
  <Route path="/home" component={...} />
 </Route>
);
include {this.props.children} ????

cache-control via express ??
*/