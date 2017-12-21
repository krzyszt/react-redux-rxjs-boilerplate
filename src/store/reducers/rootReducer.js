/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

/**
 * Inserting application reducers
 */
import auth from './auth.reducer';

/**
 * routeReducer
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer
 */
export default function createReducer() {
  return combineReducers({
    route: routeReducer,
    auth
  });
}
