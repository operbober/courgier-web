import {Card, CardContent} from '@material-ui/core';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {DataSourceStatusIcon} from '../../components/DataSourceStatusIcon';
import {DataSourceTypeIcon} from '../../components/DataSourceTypeIcon';
import {Device} from '../../models/Device';
import {Metric} from '../../models/Metric';
import {getDeviceById, getMetricsByDevice} from '../../store/selector';
import {State} from '../../store/State';
import {DateFilter} from './DateFilter';
import './Details.css'
import {MetricList} from './MetricList';

interface Props {
	getMetrics: (deviceId: string) => void,
	metrics: Metric[],
	device: Device,
	match: any,
}

class DetailsComponent extends React.Component<Props, { realTimeFlag: boolean }> {

	constructor(props: Props) {
		super(props);
		this.state = {
			realTimeFlag: true,
		}
	}

	public handleRealTimeFlagChange = () => {
		this.setState((prevState) => ({
			realTimeFlag: !prevState.realTimeFlag
		}))
	};

	public render() {
		const {metrics, device: {status, name, type}} = this.props;
		const {realTimeFlag} = this.state;
		if (!metrics) {
			return (
				<div>Device doesn't have metrics</div>
			)
		}

		return (
			<main>
				<div className="DetailsHeader">
					<Card className="DeviceInfo">
						<CardContent className="DeviceInfoContent">
							<DataSourceTypeIcon type={type.toLowerCase()}/>
							{name}
							<DataSourceStatusIcon status={status}/>
						</CardContent>
					</Card>
					<DateFilter disabled={realTimeFlag} onChange={this.handleRealTimeFlagChange}/>
				</div>
				<MetricList items={metrics}/>
			</main>
		);
	}
}

export const Details = compose(
	withRouter,
	connect((state: State, ownProps: any) => {
		const {id} = ownProps.match.params;
		return {
			metrics: getMetricsByDevice(id)(state),
			device: getDeviceById(id)(state),
		}
	})
)(DetailsComponent);
