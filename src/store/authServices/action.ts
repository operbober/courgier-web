import { AnyAction } from 'redux';

export const SIGNIN = {
  ERROR: 'SIGNIN_ERROR',
  REQUEST: 'SIGNIN_REQUEST',
  SUCCESS: 'SIGNIN_SUCCESS',
};

export const SIGNUP = {
  ERROR: 'SIGNUP_ERROR',
  REQUEST: 'SIGNUP_REQUEST',
  SUCCESS: 'SIGNUP_SUCCESS',
};

export const SIGNOUT = 'SIGNOUT';

export const SUBSCRIBE_ON_AUTH_STATE_CHANGE = 'SUBSCRIBE_ON_AUTH_STATE_CHANGE';

export const AUTH_STATE_CHANGE = 'AUTH_STATE_CHANGE';

export const signIn = (email: string, password: string) => {
  return {
    payload: {email, password},
    type: SIGNIN.REQUEST,
  };
};

export const signInSuccess = (user: object) => {
  return {
    payload: {user},
    type: SIGNIN.SUCCESS,
  };
};

export const signInError = (error: string) => {
  return {
    payload: {error},
    type: SIGNIN.ERROR,
  };
};

export const signUp = (email: string, password: string) => {
  return {
    payload: {email, password},
    type: SIGNUP.REQUEST,
  };
};

export const signUpSuccess = (user: object): AnyAction => {
  return {
    payload: {user},
    type: SIGNUP.SUCCESS,
  };
};

export const signUpError = (error: object) => {
  return {
    payload: error,
    type: SIGNUP.ERROR,
  };
};

export const signOut = () => {
  return {
    type: SIGNOUT,
  };
};

export const subscribeOnAuthStateChange = () => ({
  type: SUBSCRIBE_ON_AUTH_STATE_CHANGE,
});

export const authStateChange = (user: object): AnyAction => ({
  type: AUTH_STATE_CHANGE,
  user,
});