import * as moment from 'moment';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {DataSourceTypeIcon} from '../../components/DataSourceTypeIcon';
import {Device} from '../../models/Device';
import {PATHS} from '../../router/Paths';
import './Device.css'

export class DeviceItem extends React.Component {

    public props: {
        device: Device
    };

    public render() {

        const {id, name, type, description, lastPollTime} = this.props.device;
        const deviceIcon = <DataSourceTypeIcon type={type.toLowerCase()}/>;

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
