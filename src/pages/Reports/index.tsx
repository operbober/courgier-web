import * as React from 'react';
import './Reports.css';
import {
	Button,
	Card,
	CardContent,
	Checkbox,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	MenuItem,
	Select,
	TextField,
	Typography
} from '@material-ui/core';
import {connect} from 'react-redux';
import {State} from '../../store/State';
import {getAllDevices, getMetricsByDevice} from '../../store/selector';
import {Device} from '../../models/Device';
import {Metric} from '../../models/Metric';
import * as moment from 'moment';

const DATE_PICKER_FORMAT = 'YYYY-MM-DDTHH:mm';

interface Props {
	devices: Device[];
	metrics: Metric[];
}

class ReportsComponent extends React.Component<Props, any> {

	constructor(props: Readonly<Props>) {
		super(props);
		this.state = {
			deviceId: '1',
			typeId: 'xlsx'
		}
	}

	public handleSelectChange = (event: any) => {
		this.setState({[event.target.name]: event.target.value});
	};

	public render() {
		const {devices, metrics} = this.props;
		return (
			<div className="ReportsContainer">
				<Card className="ReportsCards">
					<CardContent>
						<Typography variant="h5" component="h2">Select Data Source</Typography>
						<Select
							style={{width: '100%'}}
							value={this.state.deviceId}
							onChange={this.handleSelectChange}
							inputProps={{
								name: 'deviceId',
							}}
						>
							{
								devices.map((device: Device) => (
									<MenuItem value={device.id}>{device.name}</MenuItem>
								))
							}
						</Select>
					</CardContent>
				</Card>
				<Card className="ReportsCards">
					<CardContent>
						<Typography variant="h5" component="h2">Select Period</Typography>
						<div>
							<TextField
								style={{width: '100%'}}
								id="datetime-local"
								label="From"
								type="datetime-local"
								defaultValue={moment().subtract(24, 'hour').format(DATE_PICKER_FORMAT)}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</div>
						<div>
							<TextField
								style={{width: '100%'}}
								id="datetime-local"
								label="To"
								type="datetime-local"
								defaultValue={moment().format(DATE_PICKER_FORMAT)}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</div>
					</CardContent>
				</Card>
				<Card className="ReportsCards">
					<CardContent>
						<Typography variant="h5" component="h2">Select Metrics</Typography>
						<List style={{
							width: '100%',
							position: 'relative',
							overflow: 'auto',
							maxHeight: 100,
						}}>
							{metrics.map((metric: Metric) => (
								<ListItem key={metric.id} button={true}>
									<ListItemText primary={metric.name}/>
									<ListItemSecondaryAction>
										<Checkbox
											defaultChecked={false}
										/>
									</ListItemSecondaryAction>
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
				<Card className="ReportsCards">
					<CardContent style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center'
					}}>
						<Typography variant="h5" component="h2">Select Format and Generate Report</Typography>
						<div style={{display: 'flex', justifyContent: 'space-around'}}>
							<Select
								value={this.state.typeId}
								onChange={this.handleSelectChange}
								inputProps={{
									name: 'typeId',
								}}
							>
								<MenuItem value="xlsx">.xlsx</MenuItem>
								<MenuItem value="pdf">.pdf</MenuItem>
							</Select>
							<Button variant="contained" color="primary">Generate</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}
}


const mapStateToProps = (state: State) => ({
	devices: getAllDevices(state),
	metrics: getMetricsByDevice('1')(state),
});

export const Reports = connect(mapStateToProps)(ReportsComponent);
