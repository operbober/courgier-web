import {AnyAction} from 'redux';
import {PayloadActionCreator} from '../../model/PayloadActionCreator';


export const SIGN_IN = {
    REQUEST: 'SIGN_IN_REQUEST',
    SUCCESS: 'SIGN_IN_SUCCESS',
    ERROR: 'SIGN_IN_ERROR',
};

export const signIn: PayloadActionCreator<{}> = (email: string, password: string) => {
    return {
        payload: {email, password},
        type: SIGN_IN.REQUEST,
    };
};

export const signInSuccess: PayloadActionCreator<{}> = (user: object) => {
    return {
        payload: {user},
        type: SIGN_IN.SUCCESS,
    };
};

export const signInError: PayloadActionCreator<{}> = (error: string) => {
    return {
        payload: {error},
        type: SIGN_IN.ERROR,
    };
};


export const SIGN_UP = {
    ERROR: 'SIGN_UP_ERROR',
    REQUEST: 'SIGN_UP_REQUEST',
    SUCCESS: 'SIGN_UP_SUCCESS',
};

export const signUp: PayloadActionCreator<{}> = (email: string, password: string) => {
    return {
        payload: {email, password},
        type: SIGN_UP.REQUEST,
    };
};

export const signUpSuccess: PayloadActionCreator<{}> = (user: object) => {
    return {
        payload: {user},
        type: SIGN_UP.SUCCESS,
    };
};

export const signUpError = (error: object) => {
    return {
        payload: error,
        type: SIGN_UP.ERROR,
    };
};


export const SIGN_OUT = 'SIGNOUT';

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};


export const SUBSCRIBE_ON_AUTH_STATE_CHANGE = 'SUBSCRIBE_ON_AUTH_STATE_CHANGE';
export const AUTH_STATE_CHANGE = 'AUTH_STATE_CHANGE';

export const subscribeOnAuthStateChange = () => ({
    type: SUBSCRIBE_ON_AUTH_STATE_CHANGE,
});

export const authStateChange = (user: object): AnyAction => ({
    type: AUTH_STATE_CHANGE,
    user,
});
