import { SIGNUP } from './action';

const defaultState = {
  error: null,
  loading: false,
  loggedIn: false,
  user: null,
};

export const singupReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SIGNUP.REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case SIGNUP.SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        loggedIn: true,
        user: action.payload.user,
      }
    }

    case SIGNUP.ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }

    default:
      return state;
  }
};
