import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {Metric} from '../../models/Metric';
import {getMetricsByDevice} from '../../store/selector';
import {State} from '../../store/State';
import {DateFilter} from './DateFilter';
import './Details.css'
import {MetricList} from './MetricList';

interface Props {
    getMetrics: (deviceId: string) => void,
    metrics: Metric[],
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
        const {metrics} = this.props;
        const {realTimeFlag} = this.state;
        return (
            <main>
                {
                    metrics
                        ? (
                            <React.Fragment>
                                <DateFilter disabled={realTimeFlag} onChange={this.handleRealTimeFlagChange}/>
                                <MetricList items={metrics}/>
                            </React.Fragment>
                        )
                        : (
                            <div>Device doesn't have metrics</div>
                        )
                }
            </main>
        );
    }
}

export const Details = compose(
    withRouter,
    connect((state: State, ownProps: any) => {
        const {id} = ownProps.match.params;
        return {
            metrics: getMetricsByDevice(id)(state)
        }
    })
)(DetailsComponent);
