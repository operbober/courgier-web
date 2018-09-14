export const SIGNIN = {
  ERROR: 'SIGNIN_ERROR',
  REQUEST: 'SIGNIN_REQUEST',
  SUCCESS: 'SIGNIN_SUCCESS'
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

export const signout = () => {
  return {
    type: SIGNOUT
  };
};