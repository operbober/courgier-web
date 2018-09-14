import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as AuthActions from './action';

const signup = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(AuthActions.SIGNUP.REQUEST),
    switchMap((action: any) => {
          const {email, password} = action.payload;
          return api.signUp(email, password).pipe(
              switchMap((res: any) => of(AuthActions.signupSuccess({
                email: res.user.email,
                uid: res.user.uid
              }))),
              // catchError(({code, message}) => {
              //   return code !== 'auth/email-already-in-use'
              //       ? of(AuthActions.signupError(message))
              //       : of(AuthActions.signup(email, password))
              // })
          )
        }
    )
);
export default combineEpics(signup);