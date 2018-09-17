import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, ignoreElements, switchMap } from 'rxjs/operators';
import * as AuthActions from './action';

const signin = (action$: any, state$: any, { api }: any) => action$.pipe(
    ofType(AuthActions.SIGNIN.REQUEST),
    switchMap((action: any) => {
      const { email, password } = action.payload;

      return api.logIn(email, password).pipe(
          switchMap((res: any) => of(AuthActions.signinSuccess({
            email: res.user.email,
            uid: res.user.uid
          }))),
          catchError((error) => of(AuthActions.signinError(error.message)))
      )
    })
);

const signout = (action$: any, state$: any, { api }: any) => action$.pipe(
    ofType(AuthActions.SIGNOUT),
    switchMap(() => api.logOut().pipe(ignoreElements()))
);

const signup = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(AuthActions.SIGNUP.REQUEST),
    switchMap((action: any) => {
          const {email, password} = action.payload;
          return api.signUp(email, password).pipe(
              switchMap((res: any) => of(AuthActions.signupSuccess({
                email: res.user.email,
                uid: res.user.uid
              }))),
              catchError((error) => {
                return error.code !== 'auth/email-already-in-use'
                    ? of(AuthActions.signupError(error.message))
                    : of(AuthActions.signup(email, password))
              })
          )
        }
    )
);

export default combineEpics(signin, signout, signup);