import * as React from 'react';
import {SortableTable} from '../../components/SortableTable/SortableTable';
import {Device} from '../../models/Device';
import {DeviceItem} from './DeviceItem';

export class DevicesList extends SortableTable<Device> {
    protected itemRenderer(item: Device): JSX.Element {
        return <DeviceItem key={item.id} device={item}/>
    }
}

