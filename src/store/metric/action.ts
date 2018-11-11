import {ActionCreator, AnyAction} from 'redux';
import {PayloadActionCreator} from '../../models/PayloadActionCreator';
import {defineAsyncAction} from '../../util/defineAction';

export const GET_METRICS = defineAsyncAction('GET_METRICS');

export const getMetrics = (deviceId: string): any => ({
    type: GET_METRICS.REQUEST,
    payload: deviceId,
    loading: [GET_METRICS.ACTION, true],
});

export const getMetricsSuccess: PayloadActionCreator<any> = (metrics: any) => ({
    type: GET_METRICS.SUCCESS,
    payload: metrics,
    loading: [GET_METRICS.ACTION, false]
});

export const getMetricsFailed: ActionCreator<AnyAction> = () => ({
    type: GET_METRICS.FAILURE,
    loading: [GET_METRICS, false]
});