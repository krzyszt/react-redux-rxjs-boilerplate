import * as constants from './constants';

export function login(payload) {
  return {
    type: constants.LOGIN_STARTED,
    payload
  };
}

export function logout() {
  console.log('logout');
  return {
    type: constants.LOGOUT
  };
}
