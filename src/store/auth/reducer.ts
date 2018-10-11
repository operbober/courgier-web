import {AnyAction} from 'redux';
import {AuthState} from '../../models/AuthState';
import {AUTH_STATE_CHANGE, SIGN_IN, SIGN_OUT, SIGN_UP} from './action';

const defaultState: AuthState = {
    user: null,
};

export const authReducer = (state: AuthState = defaultState, action: AnyAction): AuthState => {
    switch (action.type) {
        case SIGN_IN.SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
            };
        }

        case SIGN_OUT: {
            return {
                ...state,
                user: null,
            };
        }

        case SIGN_UP.SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
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
