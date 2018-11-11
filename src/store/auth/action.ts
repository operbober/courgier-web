import {AnyAction} from 'redux';
import {PayloadActionCreator} from '../../models/PayloadActionCreator';
import {defineAsyncAction} from '../../util/defineAction';


export const SIGN_IN = defineAsyncAction('SIGN_IN');

export const signIn: PayloadActionCreator<{}> = (email: string, password: string) => {
    return {
        type: SIGN_IN.REQUEST,
        payload: {email, password},
        loading: [SIGN_IN.ACTION, true],
    };
};

export const signInSuccess: PayloadActionCreator<{}> = (user: object) => {
    return {
        type: SIGN_IN.SUCCESS,
        payload: {user},
        loading: [SIGN_IN.ACTION, false]
    };
};

export const signInError: PayloadActionCreator<{}> = (error: string) => {
    return {
        type: SIGN_IN.FAILURE,
        payload: {error},
        loading: [SIGN_IN.ACTION, false]
    };
};


export const SIGN_UP = defineAsyncAction('SIGN_UP');

export const signUp: PayloadActionCreator<{}> = (email: string, password: string) => {
    return {
        type: SIGN_UP.REQUEST,
        payload: {email, password},
        loading: [SIGN_UP.ACTION, true]
    };
};

export const signUpSuccess: PayloadActionCreator<{}> = (user: object) => {
    return {
        type: SIGN_UP.SUCCESS,
        payload: {user},
        loading: [SIGN_UP.ACTION, false]
    };
};

export const signUpError = (error: object) => {
    return {
        type: SIGN_UP.FAILURE,
        payload: error,
        loading: [SIGN_UP.ACTION, false]
    };
};


export const SIGN_OUT = 'SIGN_OUT';

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};

export const APP = 'APP';
export const SUBSCRIBE_ON_AUTH_STATE_CHANGE = 'SUBSCRIBE_ON_AUTH_STATE_CHANGE';
export const AUTH_STATE_CHANGE = 'AUTH_STATE_CHANGE';

export const subscribeOnAuthStateChange = () => ({
    type: SUBSCRIBE_ON_AUTH_STATE_CHANGE,
    loading: [APP, true]
});

export const authStateChange = (user: object): AnyAction => ({
    type: AUTH_STATE_CHANGE,
    loading: [APP, false],
    user,
});
