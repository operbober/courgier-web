import {AnyAction} from 'redux';
import {AuthState} from '../../model/AuthState';
import {AUTH_STATE_CHANGE, SIGN_IN, SIGN_OUT, SIGN_UP} from './action';

const defaultState: AuthState = {
    error: null,
    loading: false,
    user: null,
};

export const authReducer = (state: AuthState = defaultState, action: AnyAction): AuthState => {
    switch (action.type) {
        case SIGN_IN.REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case SIGN_IN.SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                user: action.payload.user,
            };
        }

        case SIGN_IN.ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        }

        case SIGN_OUT: {
            return {
                ...state,
                loading: false,
                user: null,
            };
        }

        case SIGN_UP.REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case SIGN_UP.SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                user: action.payload.user,
            };
        }

        case SIGN_UP.ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        }

        case AUTH_STATE_CHANGE: {
            return {
                ...state,
                user: action.user,
            };
        }

        default:
            return state;
    }
};
