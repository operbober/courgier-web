import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import {Metric} from '../../models/Metric';
import {MetricDetails} from './MetricDetails';
import {Threshold} from './Threshold';


interface Props {
    item: Metric;
}

export class MetricItem extends React.Component<Props> {


	constructor(props: Readonly<Props>) {
		super(props);
		this.state = {

		}
	}

	public render() {
    	const {item} = this.props;
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{item.label}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="MetricItemContent">
                        <MetricDetails metric={item}/>
                        <Threshold/>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
