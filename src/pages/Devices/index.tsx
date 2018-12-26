import * as moment from 'moment'
import * as React from 'react';
import {connect} from 'react-redux';
import {GET_DEVICES} from 'src/store/device/action';
import {State} from 'src/store/State';
import {SortableTable} from '../../components/SortableTable/SortableTable';
import {Spinner} from '../../components/Spinner/Spinner';
import {Device} from '../../models/Device';
import {createLoadingSelector, getAllDevices} from '../../store/selector';
import TextField from '@material-ui/core/TextField';

const generateRandomNumber = (min:any, max: any) => min - 0.5 + Math.random() * (max - min + 1);
const data = [
        {
            id: 1,
            type: 'apple',
            name: 'iPhone SE',
            status: 1,
            description: 'Friend\'s mobile phone',
            lastPollTime: moment.utc().days(generateRandomNumber(1,2)).hours(generateRandomNumber(1,24)).format(''),
        },
        {
            id: 2,
            type: 'windows',
            name: 'Home PC',
            status: 0,
            description: 'My personal computer at home',
            lastPollTime: moment.utc().days(generateRandomNumber(1,4)).hours(generateRandomNumber(1,24)).format(''),
        },
        {
            id: 3,
            type: 'windows',
            name: 'Work PC',
            status: 0,
            description: 'My personal computer at work',
            lastPollTime: moment.utc().days(generateRandomNumber(1,2)).hours(generateRandomNumber(1,24)).format(''),
        },
        {
            id: 4,
            type: 'android',
            name: 'LG Q6',
            status: 1,
            description: 'My mobile phone',
            lastPollTime: moment.utc().days(1).hours(generateRandomNumber(1,24)).format(''),
        }
    ];

interface Props {
    devices: Device[];
    loading: boolean,
    error?: string,
}

class DevicesComponent extends React.Component<Props> {


	constructor(props: Readonly<Props>) {
		super(props);
		this.state = {
			devices: data,
			loading: false
		}
	}

	public onChange = (event: any) => {
		const isPropMatch = (prop: any) => prop.toLowerCase().includes(event.target.value.toLowerCase());
		const updatedItems = data.filter((item:any) => isPropMatch(item.name) || isPropMatch(item.type));
		this.setState({devices: updatedItems})
	};

	public render() {
        const {devices, loading} = this.state as any;

        return (
            <main>
                <div className="container">
                    {loading
                        ? <Spinner/>
                        : (
                            <React.Fragment>
								<TextField
									fullWidth={true}
									id="standard-search"
									label="Search"
									type="search"
									margin="normal"
									onChange={this.onChange}
								/>
                                <SortableTable items={devices}/>
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
