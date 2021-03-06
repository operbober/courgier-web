import {createSelector} from 'reselect';
import {DeviceState} from './DeviceState';

export const getIds = (device: DeviceState) => {
    return device.ids;
};
export const getItems = (device: DeviceState) => device.items;
export const getAllItems = createSelector(
    [getIds, getItems],
    (ids, items) => ids.map(id => items[id])
);
export const getItemById = (id: string) => (device: DeviceState) => getItems(device)[id];
