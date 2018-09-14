export const LOGIN = {
    REQUEST: 'LOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    ERROR: 'LOGIN_ERROR'
};

export const login = (email: string, password: string) => {
    return {
        type: LOGIN.REQUEST,
        payload: {email,password},
    }
};

export const loginSuccess = (user: object) => {
    return {
        type: LOGIN.SUCCESS,
        payload: {user}
    }
};

export const loginError = (error: string) => {
    return {
        type: LOGIN.ERROR,
        payload: {error}
    }
};