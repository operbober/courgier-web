import * as moment from 'moment';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Device} from '../../models/Device';
import './Device.css'

const devicesIcons = {
    android: <span className="icon-android"/>,
    apple: <span className="icon-apple"/>,
    linux: <span className="icon-linux"/>,
    other: <span className="icon-other"/>,
    windows: <span className="icon-windows"/>,
};

export class DeviceDescription extends React.Component {

    public props: {
        device: Device
    };

    public render() {

        const {name, type, description, lastPoolTime} = this.props.device;
        const deviceIcon = devicesIcons[type.toLowerCase()];

        return (
            <div className="content-holder device">
                <div className="device-info">
                    <div className="img-holder" title={type}>
                        {deviceIcon}
                    </div>
                    <Link to={`device/${name}`}>
                        <strong className="device-name">{name}</strong>
                    </Link>
                    <p>{description}</p>
                    <div className="control-info">
                        <span>
                            <strong>last active: </strong>
                            {moment(lastPoolTime).format('HH:mm:ss DD.mm.YYYY')}
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
