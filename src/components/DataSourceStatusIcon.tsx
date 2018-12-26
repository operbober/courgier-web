import {FiberManualRecord} from '@material-ui/icons';
import * as React from 'react';


const statusIcon = {
	'online': <FiberManualRecord titleAccess="online" fontSize="large" style={{color: '#b4ee7d'}}/>,
	'offline': <FiberManualRecord titleAccess="offline" fontSize="large" style={{color: '#bf0000'}}/>,
};

interface Props {
	status: 'online' | 'offline';
}

export class DataSourceStatusIcon extends React.Component<Props> {
	public render() {
		const {status} = this.props;
		return statusIcon[status];
	}
}
