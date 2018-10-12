import {Device} from '../../models/Device';

export interface DeviceState {
    ids: string[],
    items: {[id: string] : Device},
}
