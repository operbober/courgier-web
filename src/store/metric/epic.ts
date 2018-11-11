import {LOCATION_CHANGE, LocationChangeAction} from 'connected-react-router';
import {combineEpics, ofType} from 'redux-observable';
import {filter, map, switchMap} from 'rxjs/operators';
import {PATHS} from '../../router/Paths';
import * as MetricActions from './action';

// @ts-ignore
const onSelectDevise = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(LOCATION_CHANGE),
    filter((action: LocationChangeAction) => {
        return action.payload.action === 'PUSH' || action.payload.action === 'POP'
    }),
    filter((action: LocationChangeAction) => {
        return action.payload.location.pathname.includes(`${PATHS.DEVICE_DETAILS}`)
    }),
    filter((action: LocationChangeAction) => {
        return !!action.payload.location.pathname.split('/').pop()
    }),
    map(
        (action: LocationChangeAction) => {
            const id = action.payload.location.pathname.split('/').pop()!;
            return MetricActions.getMetrics(id);
        }
    ),
);

const onMetricsRequest = (action$: any, state$: any, {api}: any) => action$.pipe(
    ofType(MetricActions.GET_METRICS.REQUEST),
    switchMap(
        (action: any) => {
            return api.getMetrics(action.payload).pipe(
                map((res: any) => MetricActions.getMetricsSuccess(res.val()))
            )
        }
    )
);

export const metricEpic = combineEpics(onMetricsRequest);
