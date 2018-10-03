import * as moment from 'moment';
import * as React from 'react';
import {Link} from 'react-router-dom';

export default class DeviseDescription extends React.Component {

    public props: {
        type: string,
        date: string,
        description: string,
        // TODO: think about this attribute
        // isOnline: boolean,
        name: string,
    };

    public render() {

        const devicesIcon = {
            android: <span className="icon-android"/>,
            apple: <span className="icon-apple"/>,
            linux: <span className="icon-linux"/>,
            other: <span className="icon-other"/>,
            windows: <span className="icon-windows"/>,
        };

        return (
            <div className="content-holder device">
                <Link to={`device/${this.props.name}`}>
                    <strong className="device-name">{this.props.name}</strong>
                </Link>
                <div className="device-info">
                    <div className="img-holder">
                        {devicesIcon[this.props.type]}
                    </div>
                    <p>{this.props.description}</p>
                    <div className="control-info">
                        <span>type: {this.props.type}</span>
                        <span className="online"> last active: {moment(this.props.date).format('h:mm:ss a')}</span>
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
