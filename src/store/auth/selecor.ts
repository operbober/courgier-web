import {AuthState} from './AuthState';

export const isAuthenticated = (state: AuthState) => !!state.user;
export const getUser = (state: AuthState) => state.user;
