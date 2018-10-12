import {AnyAction} from 'redux';
import {DeviceState} from 'src/store/device/DeviceState';
import {GET_DEVICES} from './action';

const defaultState: DeviceState = {
    ids: [],
    items: {}
};

export const devicesReducer = (state: DeviceState = defaultState, action: AnyAction): DeviceState => {
    switch (action.type) {

        case GET_DEVICES.SUCCESS: {
            const items = action.payload || {};
            return {
                ...state,
                ids: Object.keys(items),
                items,
            };
        }

        default:
            return state;
    }
};
