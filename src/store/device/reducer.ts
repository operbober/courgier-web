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
            const ids = Object.keys(items);
            ids.forEach(id => { items[id].id = id });
            return {
                ...state,
                ids,
                items,
            };
        }

        default:
            return state;
    }
};
