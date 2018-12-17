import * as React from 'react';
import {Metric} from '../../models/Metric';
import {DateFilter} from './DateFilter';
import './Details.css'
import {MetricList} from './MetricList';

interface Props {
	getMetrics: (deviceId: string) => void,
	metrics: Metric[],
	match: any,
}

interface State {
	metrics: Metric[];
	realTimeFlag: boolean;
}

export class Details extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			metrics: [
				{
					label: 'Battery Level',
					name: 'batteryLevel',
					type: 'percent',
					unit: '%'
				},
				{
					label: 'Is Battery Charging',
					name: 'isBatteryCharging',
					type: 'boolean',
				},
				{
					label: 'Free memory',
					name: 'freeMemory',
					type: 'number',
					unit: 'mb'
				}
			],
			realTimeFlag: true,
	}
	}

	// public componentDidMount() {
	//     this.props.getMetrics(this.props.match.params.id)
	// }

	public handleRealTimeFlagChange = () => {
		this.setState((prevState) => ({
			realTimeFlag: !prevState.realTimeFlag
		}))
	};

	public render() {
		const {metrics, realTimeFlag} = this.state;
		return (
			<main>
				<DateFilter disabled={realTimeFlag} onChange={this.handleRealTimeFlagChange}/>
				<MetricList items={metrics}/>
			</main>
		);
	}
}

// export const Details = compose(
//     withRouter,
//     connect((state: State) => ({
//         metrics: getAllMetrics(state)
//     }), {getMetrics})
// )(DetailsComponent);
