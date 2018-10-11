import * as React from 'react';
import {connect} from 'react-redux';
import {State} from 'src/models/State';
import {GET_DEVICES, getDevices} from 'src/store/device/action';
import {Spinner} from '../../components/Spinner/Spinner';
import {Device} from '../../models/Device';
import {createLoadingSelector, getAllDevices} from '../../store/selector';
import {DevicesList} from './DevicesList';

interface Props {
    devices: Device[];
    loading: boolean,
    error?: string,

    getDevices(): void
}

export class HomeWithSign extends React.Component<Props> {

    public componentDidMount() {
        this.props.getDevices()
    }

    public render() {
        const {devices, loading} = this.props;

        return (
            <div className="container">
                {loading
                    ? <Spinner/>
                    : (
                        <React.Fragment>
                            <DevicesList items={devices}/>
                        </React.Fragment>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    devices: getAllDevices(state),
    loading: createLoadingSelector(GET_DEVICES.ACTION)(state),
});

export default connect(
    mapStateToProps,
    {getDevices}
)(HomeWithSign);
