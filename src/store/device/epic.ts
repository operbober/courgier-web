import {combineEpics, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as devicesAction from './action';

const getItems = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(devicesAction.GET_DEVICES.REQUEST),
    switchMap(() => api.getDevices().pipe(
        map((res: any) => devicesAction.getDevicesSuccess(res.val())),
        catchError(err => {
            return of(devicesAction.getDevicesFailure(err))
        }),
    )),
);

export default combineEpics(getItems);
