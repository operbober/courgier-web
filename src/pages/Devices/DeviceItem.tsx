import * as moment from 'moment';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Device} from '../../models/Device';
import {PATHS} from '../../router/Paths';
import './Device.css'

const devicesIcons = {
    android: <span className="icon-android"/>,
    ios: <span className="icon-apple"/>,
    linux: <span className="icon-linux"/>,
    other: <span className="icon-other"/>,
    windows: <span className="icon-windows"/>,
};

export class DeviceItem extends React.Component {

    public props: {
        device: Device
    };

    public render() {

        const {id, name, type, description, lastPollTime} = this.props.device;
        const deviceIcon = devicesIcons[type.toLowerCase()];

        return (
            <div className="content-holder device">
                <div className="device-info">
                    <div className="img-holder" title={type}>
                        {deviceIcon}
                    </div>
                    <Link to={`${PATHS.DEVICE_DETAILS}/${id}`}>
                        <strong className="device-name">{name}</strong>
                    </Link>
                    <div>{description}</div>
                    <div className="control-info">
                        <span>
                            <strong>last active: </strong>
                            {moment(lastPollTime).fromNow()}
                        </span>
                        {/*TODO: think about this attribute*/}
                        {/*<span>is online:*/}
                        {/*{this.props.isOnline*/}
                        {/*? <span className="circle green"/>*/}
                        {/*: <span className="circle red"/>}*/}
                        {/*</span>*/}
                    </div>
                </div>
            </div>
        );
    }
}
