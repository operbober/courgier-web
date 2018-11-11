import {MetricState} from './MetricState';

export const getAllItems = (state: MetricState) => state.ids.map(id => state.items[id]);