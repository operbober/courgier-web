import {ActionCreator, AnyAction} from 'redux';
import {GET_DEVICES} from '../device';

export const GET_POOLS = {
    REQUEST: 'GET_POOLS_REQUEST',
    SUCCESS: 'GET_POOLS_SUCCESS',
    FAILURE: 'GET_POOLS_FAILURE'
};

export const getPools: ActionCreator<AnyAction> = (deviceId: string) => ({
    type: GET_DEVICES.REQUEST,
    payload: deviceId
});

export const getPoolsSuccess: ActionCreator<AnyAction> = (pools: any) => ({
    type: GET_POOLS.SUCCESS,
    payload: pools
});
