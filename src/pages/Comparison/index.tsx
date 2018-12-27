import * as React from 'react';
import {connect} from 'react-redux';
import {GET_DEVICES} from 'src/store/device/action';
import {State} from 'src/store/State';
import {Spinner} from '../../components/Spinner/Spinner';
import Paper from '../../components/Paper';
import {Device} from '../../models/Device';
import {createLoadingSelector, getAllDevices} from '../../store/selector';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {AddCircle} from '@material-ui/icons';
import Chart from './Chart';
import './Comparison.css'

interface Props {
    devices: Device[];
    loading: boolean,
    error?: string,
}

class ComparisonComponent extends React.Component<Props> {


	constructor(props: Readonly<Props>) {
		super(props);
		this.state = {
            device1: '',
            device2: '',
            metric1: '',
            metric2: '',
		}
	}

	public handleChange = (name:any) => (event:any) => {
        this.setState({ [name]: event.target.value });
    };

	public render() {
        const { loading, device1, device2, metric1 ,metric2 } = this.state as any;

        const renderPlaceholder = (
            <Paper>
                <div className="comparison-wrapper__placeholder">
                    <AddCircle style={{ fontSize: '50px', color: '#2bb36f' }} titleAccess="Add" />
                </div>
            </Paper>
        );

        return (
            <main>
                <div className="container">
                    {loading
                        ? <Spinner/>
                        : (
                            <div>
                                <div className="comparison-wrapper__title" style={{textAlign: 'center'}}>
                                    Select devices and metrics to compare:
                                </div>
                                <div className="comparison-wrapper">

									<Paper>
										<FormControl>
											<InputLabel htmlFor="device-native-simple">Device</InputLabel>
											<Select
												native={true}
												value={device1}
												onChange={this.handleChange('device1')}
												inputProps={{
													name: 'device1',
													id: 'device-native-simple1',
												}}
											>
												<option value="" />
												<option value={1}>iPhone SE</option>
												<option value={2}>Home PC</option>
												<option value={3}>Work PC</option>
												<option value={4}>LG Q6</option>
											</Select>
										</FormControl>
										<FormControl>
											<InputLabel htmlFor="metric-native-simple">Metric</InputLabel>
											<Select
												native={true}
												value={metric1}
												onChange={this.handleChange('metric1')}
												inputProps={{
													name: 'metric1',
													id: 'metric-native-simple1',
												}}
											>
												<option value="" />
												<option value={10}>Battery Level</option>
												<option value={20}>Free memory</option>
											</Select>
										</FormControl>
									</Paper>

									<Paper>
										<FormControl>
											<InputLabel htmlFor="device-native-simple">Device</InputLabel>
											<Select
												native={true}
												value={device2}
												onChange={this.handleChange('device2')}
												inputProps={{
													name: 'device2',
													id: 'device-native-simple2',
												}}
											>
												<option value="" />
												<option value={1}>iPhone SE</option>
												<option value={2}>Home PC</option>
												<option value={3}>Work PC</option>
												<option value={4}>LG Q6</option>
											</Select>
										</FormControl>
										<FormControl>
											<InputLabel htmlFor="metric-native-simple">Metric</InputLabel>
											<Select
												native={true}
												value={metric2}
												onChange={this.handleChange('metric2')}
												inputProps={{
													name: 'metric2',
													id: 'metric-native-simple2',
												}}
											>
												<option value="" />
												<option value={10}>Battery Level</option>
												<option value={20}>Free memory</option>
											</Select>
										</FormControl>
									</Paper>

                                    {renderPlaceholder}
                                </div>
                                <div className="comparison-wrapper__chart">
                                    <Chart />
                                </div>
                            </div>
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

export const Comparison = connect(mapStateToProps)(ComparisonComponent);
