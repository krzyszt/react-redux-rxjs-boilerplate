import { fromJS } from 'immutable';

import * as actions from '../actions/constants';

const initialState = fromJS({
  authenticated: false,
  user: null,
  loading: false,
  error: null
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_STARTED:
      return state
        .set('loading', true);
    case actions.LOGIN_SUCCEEDED:
      return state.merge({
        user: action.payload.user,
        authenticated: true,
        loading: false
      });
    case actions.LOGIN_FAILED:
      return state.merge({
        authenticated: false,
        user: null,
        error: action.error,
        loading: false
      });
    case actions.LOGOUT:
      return state.merge({
        authenticated: false,
        user: null,
        error: null,
        loading: false
      });
    default:
      return state;
  }
}
