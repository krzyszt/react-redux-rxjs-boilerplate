/**
 * Combine all epics in this file and export the combined epics.
 */

import { combineEpics } from 'redux-observable';
import { loginEpic, onLoginSucceededEpic } from './auth.epic';

const rootEpic = combineEpics(
  loginEpic,
  onLoginSucceededEpic
);

export default rootEpic;
