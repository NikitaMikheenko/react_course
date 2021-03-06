import {
    AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_INITIATE_LOGOUT,
    SET_AUTH_REDIRECT_PATH, AUTH_LOGOUT, AUTH_CHECK_TIMEOUT,
    AUTH_USER, AUTH_CHECK_STATE
} from './actionTypes';

export const authStart = () => ({
    type: AUTH_START
});

export const authSuccess = (token, userId) => ({
    type: AUTH_SUCCESS,
    idToken: token,
    userId: userId
});

export const authFail = error => ({
    type: AUTH_FAIL,
    error: error
});
export const logout = () => ({
    type: AUTH_INITIATE_LOGOUT
});

export const logoutSucceed = () => ({
    type: AUTH_LOGOUT
});

export const checkAuthTimeout = (expirationTime) => ({
    type: AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime
});

export const auth = (email, password, isSignUp) => ({
    type: AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp
});

export const setAuthRedirectPath = (path) => ({
    type: SET_AUTH_REDIRECT_PATH,
    path: path
});

export const authCheckState = () => ({
    type: AUTH_CHECK_STATE
});