import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as devicesAction from './action';

const getItems = (action$: any, state$: any, {api}: any) => action$.pipe(
  ofType(devicesAction.GET_ITEMS.REQUEST),
  switchMap(() => api.getItems().pipe(
    map((res: any) => devicesAction.getItemsSuccess(res.val())),
    catchError(err => of(devicesAction.getItemsFailure(err.message))),
  )),
);

export default combineEpics(getItems);