import {Checkbox, TextField} from '@material-ui/core';
import * as React from 'react';
import * as moment from 'moment';

const DATE_PICKER_FORMAT = 'YYYY-MM-DDTHH:mm';

export class DateFilter extends React.Component<{ disabled: boolean, onChange: () => void }> {
	public render() {
		return <div className="DateFilter">
			<div className="DateFilterFrom">
				<TextField
					id="datetime-local"
					label="From"
					type="datetime-local"
					defaultValue={moment().subtract(24, 'hour').format(DATE_PICKER_FORMAT)}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
			<div className="DateFilterTo">
				<TextField
					id="datetime-local"
					label="To"
					type="datetime-local"
					defaultValue={moment().format(DATE_PICKER_FORMAT)}
					InputLabelProps={{
						shrink: true,
					}}
					disabled={this.props.disabled}
				/>
				<div>
					Watch on Real Time
					<Checkbox
						color="default"
						checked={this.props.disabled}
						onChange={this.props.onChange}
					/>
				</div>
			</div>
		</div>;
	}
}
