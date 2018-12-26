import {DesktopWindows, DeviceUnknown, PhoneAndroid, PhoneIphone} from '@material-ui/icons';
import * as React from 'react';


const devicesIcons = {
	android: <PhoneAndroid fontSize="large" titleAccess="Android"/>,
	ios: <PhoneIphone fontSize="large" titleAccess="iOS" />,
	linux: <DesktopWindows fontSize="large" titleAccess="Linux" />,
	other: <DeviceUnknown fontSize="large" titleAccess="Other" />,
	windows: <DesktopWindows fontSize="large" titleAccess="Windows" />,
};

interface Props {
	type: string;
}

export class DataSourceTypeIcon extends React.Component<Props> {
	public render() {
		const {type} = this.props;
		return devicesIcons[type] || devicesIcons.other;
	}
}
