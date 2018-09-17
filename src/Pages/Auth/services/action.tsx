export const SIGNIN = {
  ERROR: 'SIGNIN_ERROR',
  REQUEST: 'SIGNIN_REQUEST',
  SUCCESS: 'SIGNIN_SUCCESS'
};

export const SIGNUP = {
  ERROR: 'SIGNUP_ERROR',
  REQUEST: 'SIGNUP_REQUEST',
  SUCCESS: 'SIGNUP_SUCCESS'
};

export const SIGNOUT = 'SIGNOUT';

export const signin = (email: string, password: string) => {
  return {
    payload: {email, password},
    type: SIGNIN.REQUEST,
  };
};

export const signinSuccess = (user: object) => {
  return {
    payload: {user},
    type: SIGNIN.SUCCESS,
  };
};

export const signinError = (error: string) => {
  return {
    payload: {error},
    type: SIGNIN.ERROR,
  };
};


export const signup = (email: string, password: string) => {
  return {
    payload: {email, password},
    type: SIGNUP.REQUEST,
  };
};

export const signupSuccess = (user: object) => {
  return {
    payload: {user},
    type: SIGNUP.SUCCESS,
  };
};

export const signupError = (error: object) => {
  return {
    payload: error,
    type: SIGNUP.ERROR,
  };
};

export const signout = () => {
  return {
    type: SIGNOUT
  };
};