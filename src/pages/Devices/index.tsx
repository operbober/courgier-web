import * as moment from 'moment'
import * as React from 'react';
import {connect} from 'react-redux';
import {GET_DEVICES} from 'src/store/device/action';
import {State} from 'src/store/State';
import {Spinner} from '../../components/Spinner/Spinner';
import {Device} from '../../models/Device';
import {createLoadingSelector, getAllDevices} from '../../store/selector';
import {DevicesList} from './DevicesList';

interface Props {
    devices: Device[];
    loading: boolean,
    error?: string,
}

class DevicesComponent extends React.Component<Props> {


	constructor(props: Readonly<Props>) {
		super(props);
		this.state = {
			devices: [
				{
					id: 1,
					type: 'ios',
					name: 'iPhone SE',
					description: '',
					lastPoolTime: moment.valueOf()
				},
				{
					id: 2,
					type: 'windows',
					name: 'Home PC',
					description: '',
					lastPoolTime: moment.valueOf()
				},
				{
					id: 3,
					type: 'windows',
					name: 'Work PC',
					description: '',
					lastPoolTime: moment.valueOf()
				},
				{
					id: 4,
					type: 'android',
					name: 'LG Q6',
					description: '',
					lastPoolTime: moment.valueOf()
				}
			],
			loading: false
		}
	}

	public render() {
        const {devices, loading} = this.state as any;

        return (
            <main>
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
            </main>
        );
    }
}

const mapStateToProps = (state: State) => ({
    devices: getAllDevices(state),
    loading: createLoadingSelector(GET_DEVICES.ACTION)(state),
});

export const Devices = connect(mapStateToProps)(DevicesComponent);
