import {combineEpics, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as devicesAction from './action';

const getItems = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(devicesAction.GET_ITEMS.REQUEST),
    switchMap(() => api.getItems().pipe(
        map((res: any) => devicesAction.getItemsSuccess(res.val())),
        catchError(err => {
            return of(devicesAction.getItemsFailure(err))
        }),
    )),
);

export default combineEpics(getItems);
