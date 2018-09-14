export const SIGNUP = {
  ERROR: 'SIGNUP_ERROR',
  REQUEST: 'SIGNUP_REQUEST',
  SUCCESS: 'SIGNUP_SUCCESS'
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

export const signupError = (error: string) => {
  return {
    payload: {error},
    type: SIGNUP.ERROR,
  };
};