import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import App from './App'; // eslint-disable-line import/no-named-as-default

const MOUNT_NODE = document.getElementById('root');

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);
