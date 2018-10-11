import {ActionCreator, AnyAction} from 'redux';
import {defineAsyncAction} from '../../util/defineAction';

export const GET_POOLS = defineAsyncAction('GET_POOLS');

export const getPools: ActionCreator<AnyAction> = (deviceId: string) => ({
    type: GET_POOLS.REQUEST,
    payload: deviceId
});

export const getPoolsSuccess: ActionCreator<AnyAction> = (pools: any) => ({
    type: GET_POOLS.SUCCESS,
    payload: pools
});
