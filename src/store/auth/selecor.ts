import {AuthState} from '../../models/AuthState';

export const isAuthenticated = (state: AuthState) => !!state.user;
export const getUser = (state: AuthState) => state.user;
