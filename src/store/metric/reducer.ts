import {AnyAction} from 'redux';
import {MetricState} from './MetricState';

const defaultState: MetricState = {
    ids: ['1', '2', '3', '4', '5', '6'],
    items: {
        '1': {
            id: '1',
            deviceId: '1',
            name: 'batteryLevel',
            label: 'Battery Level',
            type: 'number',
            unit: 'percent',
        },
        '2': {
            id: '2',
            deviceId: '1',
            name: 'isBatteryCharging',
            label: 'Is Battery Charging',
            type: 'boolean'
        },
        '3': {
            id: '3',
            deviceId: '1',
            name: 'freeMemory',
            label: 'Free Memory',
            type: 'number'
        },
        '4': {
            id: '4',
            deviceId: '4',
            name: 'batteryLevel',
            label: 'Battery Level',
            type: 'number',
            unit: 'percent',
        },
        '5': {
            id: '5',
            deviceId: '4',
            name: 'isBatteryCharging',
            label: 'Is Battery Charging',
            type: 'boolean'
        },
        '6': {
            id: '6',
            deviceId: '4',
            name: 'freeMemory',
            label: 'Free Memory',
            type: 'number'
        },
    }
};

export const metricReducer = (state: MetricState = defaultState, action: AnyAction): MetricState => {
    switch (action.type) {
        // case GET_METRICS.SUCCESS: {
        //     const items: { [key: string]: Metric } = action.payload;
        //     const ids = Object.keys(items);
        //     ids.forEach(id => items[id].name = id);
        //     return {
        //         ids,
        //         items,
        //     };
        // }
        default:
            return state;
    }
};