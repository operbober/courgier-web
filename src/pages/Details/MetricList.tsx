import * as React from 'react';
import {GenericList} from '../../components/GenericList';
import {Metric} from '../../models/Metric';
import {MetricItem} from './MetricItem';

export class MetricList extends GenericList<Metric> {
    protected itemRenderer(item: Metric): JSX.Element {
        return <MetricItem key={item.name} item={item}/>;
    }
}