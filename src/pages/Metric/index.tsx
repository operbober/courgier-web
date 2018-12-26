import * as React from 'react';
import {Metric} from '../../models/Metric';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import * as moment from 'moment';


interface Props {
	metric: Metric
}

const batteryLevel = [
	{date: moment().subtract(10, 'minute').valueOf(), value: 91},
	{date: moment().subtract(1, 'hour').valueOf(), value: 82},
	{date: moment().subtract(2, 'hour').valueOf(), value: 71},
	{date: moment().subtract(3, 'hour').valueOf(), value: 55},
	{date: moment().subtract(4, 'hour').valueOf(), value: 40},
	{date: moment().subtract(5, 'hour').valueOf(), value: 22},
	{date: moment().subtract(6, 'hour').valueOf(), value: 7},
	{date: moment().subtract(7, 'hour').valueOf(), value: 12},
	{date: moment().subtract(8, 'hour').valueOf(), value: 14},
	{date: moment().subtract(9, 'hour').valueOf(), value: 17},
	{date: moment().subtract(10, 'hour').valueOf(), value: 19},
	{date: moment().subtract(11, 'hour').valueOf(), value: 25},
	{date: moment().subtract(12, 'hour').valueOf(), value: 26},
	{date: moment().subtract(13, 'hour').valueOf(), value: 27},
	{date: moment().subtract(14, 'hour').valueOf(), value: 29},
	{date: moment().subtract(15, 'hour').valueOf(), value: 32},
	{date: moment().subtract(16, 'hour').valueOf(), value: 35},
	{date: moment().subtract(17, 'hour').valueOf(), value: 36},
	{date: moment().subtract(18, 'hour').valueOf(), value: 38},
	{date: moment().subtract(19, 'hour').valueOf(), value: 45},
	{date: moment().subtract(20, 'hour').valueOf(), value: 51},
	{date: moment().subtract(21, 'hour').valueOf(), value: 52},
	{date: moment().subtract(22, 'hour').valueOf(), value: 55},
	{date: moment().subtract(23, 'hour').valueOf(), value: 61},
	{date: moment().subtract(24, 'hour').valueOf(), value: 65},
	{date: moment().subtract(25, 'hour').valueOf(), value: 71},
];

const isBatteryCharging = [
	{date: moment().subtract(10, 'minute').valueOf(), value: 1},
	{date: moment().subtract(1, 'hour').valueOf(), value: 1},
	{date: moment().subtract(2, 'hour').valueOf(), value: 1},
	{date: moment().subtract(3, 'hour').valueOf(), value: 1},
	{date: moment().subtract(4, 'hour').valueOf(), value: 1},
	{date: moment().subtract(5, 'hour').valueOf(), value: 1},
	{date: moment().subtract(6, 'hour').valueOf(), value: 1},
	{date: moment().subtract(7, 'hour').valueOf(), value: 0},
	{date: moment().subtract(8, 'hour').valueOf(), value: 0},
	{date: moment().subtract(9, 'hour').valueOf(), value: 0},
	{date: moment().subtract(10, 'hour').valueOf(), value: 0},
	{date: moment().subtract(11, 'hour').valueOf(), value: 0},
	{date: moment().subtract(12, 'hour').valueOf(), value: 0},
	{date: moment().subtract(13, 'hour').valueOf(), value: 0},
	{date: moment().subtract(14, 'hour').valueOf(), value: 0},
	{date: moment().subtract(15, 'hour').valueOf(), value: 0},
	{date: moment().subtract(16, 'hour').valueOf(), value: 0},
	{date: moment().subtract(17, 'hour').valueOf(), value: 0},
	{date: moment().subtract(18, 'hour').valueOf(), value: 0},
	{date: moment().subtract(19, 'hour').valueOf(), value: 0},
	{date: moment().subtract(20, 'hour').valueOf(), value: 0},
	{date: moment().subtract(21, 'hour').valueOf(), value: 0},
	{date: moment().subtract(22, 'hour').valueOf(), value: 0},
	{date: moment().subtract(23, 'hour').valueOf(), value: 0},
	{date: moment().subtract(24, 'hour').valueOf(), value: 0},
	{date: moment().subtract(25, 'hour').valueOf(), value: 0},
];

const timeTickFormatter = (tick: any) => moment(tick).format('dd:HH:mm');

const booleanTickFormatter = (tick: any) => tick ? 'true' : 'false';

export class MetricDetails extends React.Component<Props> {

	public render() {

		if (this.props.metric.name === 'isBatteryCharging') {
			return (
				<div>
					<LineChart width={730} height={250} data={isBatteryCharging}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<CartesianGrid strokeDasharray="3 3"/>
						<XAxis dataKey="date" type="number" scale="time" tickFormatter={timeTickFormatter} domain={['dataMax', 'dataMin']}/>
						<YAxis type={'category'} tickFormatter={booleanTickFormatter} padding={{top: 25, bottom: 25}}/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey="value" stroke="#8884d8"/>
					</LineChart>
				</div>
			)
		}

		return (
			<div>
				<LineChart width={730} height={250} data={batteryLevel}
						   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					<CartesianGrid strokeDasharray="3 3"/>
					<XAxis dataKey="date" type="number" scale="time" tickFormatter={timeTickFormatter} domain={['dataMax', 'dataMin']}/>
					<YAxis padding={{top: 25, bottom: 0}}/>
					<Tooltip/>
					<Legend/>
					<Line type="monotone" dataKey="value" stroke="#8884d8"/>
				</LineChart>
			</div>
		);
	}
}
