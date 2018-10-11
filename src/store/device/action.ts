import {ActionCreator, AnyAction} from 'redux';
import {PayloadActionCreator} from '../../models/PayloadActionCreator';
import {defineAsyncAction} from '../../util/defineAction';

export const GET_DEVICES = defineAsyncAction('GET_DEVICES');

export const getDevices: ActionCreator<AnyAction> = () => {
    return {
        type: GET_DEVICES.REQUEST,
        loading: [GET_DEVICES.ACTION, true]
    }
};

export const getDevicesSuccess: PayloadActionCreator<{}> = (items: {}) => {
    return {
        type: GET_DEVICES.SUCCESS,
        payload: items,
        loading: [GET_DEVICES.ACTION, false]

    }
};

export const getDevicesFailure: PayloadActionCreator<string> = (error :string) => {
    return {
        type: GET_DEVICES.FAILURE,
        payload: error,
        loading: [GET_DEVICES.ACTION, false]
    }
};
