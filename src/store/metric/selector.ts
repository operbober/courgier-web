import {MetricState} from './MetricState';

export const getAllItems = (state: MetricState) => state.ids.map(id => state.items[id]);

export const getItemsByDeviceId = (deviceId: string) => (state: MetricState) => getAllItems(state).filter(item => item.deviceId === deviceId);