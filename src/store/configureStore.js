import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { fromJS } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';

import createReducer from './reducers/rootReducer';
import rootEpic from './epics/rootEpic';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    createEpicMiddleware(rootEpic),
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}
