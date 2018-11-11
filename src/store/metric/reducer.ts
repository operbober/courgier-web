import {AnyAction} from 'redux';
import {Metric} from '../../models/Metric';
import {GET_METRICS} from './action';
import {MetricState} from './MetricState';

const defaultState: MetricState = {
    ids: [],
    items: {}
};

export const metricReducer = (state = defaultState, action: AnyAction): MetricState => {
    switch (action.type) {
        case GET_METRICS.SUCCESS: {
            const items: { [key: string]: Metric } = action.payload;
            const ids = Object.keys(items);
            ids.forEach(id => items[id].name = id);
            return {
                ids,
                items,
            };
        }
        default:
            return state;
    }
};