import {Device} from './Device';

export interface DeviceState {
    ids: string[],
    items: {[id: string] : Device},
}
