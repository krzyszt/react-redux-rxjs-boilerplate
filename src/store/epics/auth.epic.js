import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as actions from '../actions/constants';

export const loginEpic = action$ => action$.ofType(actions.LOGIN_STARTED)
  .map(result => ({
    type: actions.LOGIN_SUCCEEDED,
    payload: result.payload
  }));

export const onLoginSucceededEpic = action$ => action$.ofType(actions.LOGIN_SUCCEEDED)
  .map(() => ({
    type: actions.DUMMY
  }));
