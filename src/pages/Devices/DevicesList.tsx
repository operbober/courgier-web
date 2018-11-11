import * as React from 'react';
import {GenericList} from '../../components/GenericList';
import {Device} from '../../models/Device';
import {DeviceItem} from './DeviceItem';


export class DevicesList extends GenericList<Device> {
    protected itemRenderer(item: Device): JSX.Element {
        return <DeviceItem key={item.id} device={item}/>
    }
}

