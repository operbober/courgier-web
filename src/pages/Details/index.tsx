import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {Metric} from '../../models/Metric';
import {getMetrics} from '../../store/metric/action';
import {getAllMetrics} from '../../store/selector';
import {State} from '../../store/State';
import {MetricList} from './MetricList';


interface Props {
    getMetrics: (deviceId: string) => void,
    metrics: Metric[],
    match: any,
}

class DetailsComponent extends React.Component<Props> {

    public componentDidMount() {
        this.props.getMetrics(this.props.match.params.id)
    }


    public render() {
        return (
            <main>
                <MetricList items={this.props.metrics}/>
            </main>
        );
    }
}

export const Details = compose(
    withRouter,
    connect((state: State) => ({
        metrics: getAllMetrics(state)
    }), {getMetrics})
)(DetailsComponent);