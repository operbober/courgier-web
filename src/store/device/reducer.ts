import {AnyAction} from 'redux';
import {DevicesState} from 'src/model/DevicesState';
import {GET_DEVICES} from './action';

const defaultState: DevicesState = {
    error: null,
    items: {},
    loading: false
};

export const devicesReducer = (state: DevicesState = defaultState, action: AnyAction): DevicesState => {
    switch (action.type) {

        case GET_DEVICES.REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case GET_DEVICES.SUCCESS: {
            return {
                ...state,
                items: action.payload || {},
                loading: false,
            };
        }

        case GET_DEVICES.FAILURE: {
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        }

        default:
            return state;
    }
};
