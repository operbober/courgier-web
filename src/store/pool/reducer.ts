import {Reducer} from 'redux';
import {PayloadAction} from '../../models/PayloadAction';
import {PollState} from './PollState';

const defaultState: PollState = {
    ids: ['1', '2', '3', '4', '5', '6'],
    polls: {
        '1': {
            id: '1',
            deviceId: '1',
            batteryLevel: 87,
            isBatteryCharging: false,
            freeMemory: 8756,
        },
        '2': {
            id: '2',
            deviceId: '1',
            batteryLevel: 85,
            isBatteryCharging: false,
            freeMemory: 8756,
        },
    }
};

export const pollsReducer: Reducer<PollState, PayloadAction<{}>> = (state = defaultState, action) => {
    // if (action.type === GET_POOLS.SUCCESS) {
    //     return {
    //         polls: action.payload
    //     }
    // }
    return state;
};
