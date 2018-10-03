import {AnyAction} from 'redux';
import {AuthState} from '../interface/AuthState';
import {AUTH_STATE_CHANGE, SIGNIN, SIGNOUT, SIGNUP} from './action';

const defaultState: AuthState = {
    error: null,
    firebaseInitialized: false,
    loading: false,
    loggedIn: false,
    user: null,
};

export const authReducer = (state: AuthState = defaultState, action: AnyAction): AuthState => {
    switch (action.type) {
        case SIGNIN.REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case SIGNIN.SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                loggedIn: true,
                user: action.payload.user,
            };
        }

        case SIGNIN.ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        }

        case SIGNOUT: {
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: null,
            };
        }

        case SIGNUP.REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case SIGNUP.SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                loggedIn: true,
                user: action.payload.user,
            };
        }

        case SIGNUP.ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        }

        case AUTH_STATE_CHANGE: {
            return {
                ...state,
                firebaseInitialized: true,
                loggedIn: !!action.user,
                user: action.user,
            };
        }

        default:
            return state;
    }
};
