import { createSelector } from 'reselect';

const selectAuth = state => state.get('auth');

const selectRoute = state => state.get('route');

const makeSelectUser = () => createSelector(
  selectAuth,
  authState => authState.get('user'),
);

const makeSelectAuthenticated = () => createSelector(
  selectAuth,
  authState => authState.get('authenticated'),
);

const makeSelectSession = () => createSelector(
  selectAuth(),
  authState => authState.get('session'),
);

export {
  selectAuth,
  selectRoute,
  makeSelectUser,
  makeSelectAuthenticated,
  makeSelectSession
};
