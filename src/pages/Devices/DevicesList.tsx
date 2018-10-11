import * as React from 'react';
import {GenericList} from '../../components/GenericList';
import {Device} from '../../models/Device';
import {DeviceDescription} from './DeviceDescription';


export class DevicesList extends GenericList<Device> {
    protected itemRenderer(item: Device): JSX.Element {
        return <DeviceDescription key={item.id} device={item}/>
    }
}

