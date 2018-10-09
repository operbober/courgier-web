import {Action, ActionCreator} from 'redux';
import {PayloadActionCreator} from '../../model/PayloadActionCreator';

export const GET_DEVICES = {
    FAILURE: 'GET_DEVICES_FAILURE',
    REQUEST: 'GET_DEVICES_REQUEST',
    SUCCESS: 'GET_DEVICES_SUCCESS'
};

export const getDevices: ActionCreator<Action> = () => {
    return {
        type: GET_DEVICES.REQUEST
    }
};

export const getDevicesSuccess: PayloadActionCreator<{}> = (items: {}) => {
    return {
        payload: items,
        type: GET_DEVICES.SUCCESS
    }
};

export const getDevicesFailure: PayloadActionCreator<string> = (error :string) => {
    return {
        payload: error,
        type: GET_DEVICES.FAILURE
    }
};
