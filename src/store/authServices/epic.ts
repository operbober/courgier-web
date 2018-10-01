import { push } from 'connected-react-router';
import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as devicesAction from '../devicesServices/action';
import * as AuthActions from './action';

const signIn = (action$: any, state$: any, {api}: any) => action$.pipe(
  ofType(AuthActions.SIGNIN.REQUEST),
  switchMap((action: any) => {
    const {email, password} = action.payload;

    return api.signIn(email, password).pipe(
      switchMap((res: any) => of(AuthActions.signInSuccess({
          email: res.user.email,
          uid: res.user.uid,
        }), devicesAction.getItems(), push('./'))),
      catchError((error) => of(AuthActions.signInError(error.message))),
    );
  }),
);

const signOut = (action$: any, state$: any, {api}: any) => action$.pipe(
  ofType(AuthActions.SIGNOUT),
  switchMap(() => api.signOut().pipe(
    map(() => push('./signin')),
  )),
);

const signUp = (action$: any, state$: any, {api}: any) => action$.pipe(
  ofType(AuthActions.SIGNUP.REQUEST),
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

export default combineEpics(signIn, signOut, signUp);