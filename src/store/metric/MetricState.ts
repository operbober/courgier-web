import {Metric} from '../../models/Metric';

export interface MetricState {
    ids: string[],
    items: { [key: string]: Metric },
}