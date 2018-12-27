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
            device: '',
            metric: '',
		}
	}

	public handleChange = (name:any) => (event:any) => {
        this.setState({ [name]: event.target.value });
    };

	public render() {
        const { loading, device, metric } = this.state as any;
        const renderPair = (
            <Paper>
                <FormControl>
                    <InputLabel htmlFor="device-native-simple">Device</InputLabel>
                    <Select
                        native={true}
                        value={device}
                        onChange={this.handleChange('device')}
                        inputProps={{
                            name: 'device',
                            id: 'device-native-simple',
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
                        value={metric}
                        onChange={this.handleChange('metric')}
                        inputProps={{
                            name: 'metric',
                            id: 'metric-native-simple',
                        }}
                    >
                        <option value="" />
                        <option value={10}>Battery</option>
                        <option value={20}>Free memory</option>
                    </Select>
                </FormControl>
            </Paper>
        );

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
                                <div className="comparison-wrapper__title">
                                    Select devices and metrics to compare:
                                </div>
                                <div className="comparison-wrapper">
                                    {renderPair}
                                    {renderPair}
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
