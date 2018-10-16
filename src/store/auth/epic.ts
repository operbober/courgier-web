import {push} from 'connected-react-router';
import {combineEpics, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, first, map, switchMap} from 'rxjs/operators';
import {getDevices} from '../device/action';
import * as AuthActions from './action';

const signIn = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(AuthActions.SIGN_IN.REQUEST),
    switchMap((action: any) => {
        const {email, password} = action.payload;

        return api.signIn(email, password).pipe(
            switchMap((res: any) => of(getDevices(), AuthActions.signInSuccess({
                email: res.user.email,
                uid: res.user.uid,
            }), push('./'),)),
            catchError((error) => of(AuthActions.signInError(error.message))),
        );
    }),
);

const signOut = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(AuthActions.SIGN_OUT),
    switchMap(() => api.signOut().pipe(
        map(() => push('./signin')),
    )),
);

const signUp = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(AuthActions.SIGN_UP.REQUEST),
    switchMap((action: any) => {
            const {email, password} = action.payload;
            return api.signUp(email, password).pipe(
                switchMap((res: any) => of(AuthActions.signUpSuccess({
                    email: res.user.email,
                    uid: res.user.uid,
                }), push('./'))),
                catchError((error) => {
                    return error.code !== 'auth/email-already-in-use'
                        ? of(AuthActions.signUpError(error.message))
                        : of(AuthActions.signUp(email, password));
                }),
            );
        },
    ),
);

const authStateChangeEpic = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(AuthActions.SUBSCRIBE_ON_AUTH_STATE_CHANGE),
    switchMap(() => api.subscribeOnAuthStateChanged().pipe(
        first(),
        switchMap(
            (user: any) => {
                if (user) {
                    return of(getDevices(), AuthActions.authStateChange(user))
                }
                return of(AuthActions.authStateChange(user))
            }
        )
    ))
);

export const authEpic = combineEpics(signIn, signOut, signUp, authStateChangeEpic);
