import {Info, Error, Warning} from '@material-ui/icons';
import * as React from 'react';


const Icons = {
	'warn': <Warning titleAccess="Warning" style={{color: '#fba550'}}/>,
	'error': <Error titleAccess="Error" style={{color: '#fd5c52'}}/>,
	'info': <Info titleAccess="Info" style={{color: '#2bb36f'}}/>,
};

interface Props {
    type: 'warn' | 'error' | 'info';
}

export class NotificationIcon extends React.Component<Props> {
	public render() {
		const {type} = this.props;
		return Icons[type];
	}
}
