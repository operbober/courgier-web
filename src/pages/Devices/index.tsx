import * as moment from 'moment'
import * as React from 'react';
import {connect} from 'react-redux';
import {GET_DEVICES} from 'src/store/device/action';
import {State} from 'src/store/State';
import {SortableTable} from '../../components/SortableTable/SortableTable';
import {Spinner} from '../../components/Spinner/Spinner';
import {Device} from '../../models/Device';
import {createLoadingSelector, getAllDevices} from '../../store/selector';
import TextField from '@material-ui/core/TextField';

interface Props {
    devices: Device[];
    loading: boolean,
    error?: string,
}

class DevicesComponent extends React.Component<Props> {


	constructor(props: Readonly<Props>) {
		super(props);
		this.state = {
			loading: false
		}
	}

	public onChange = (event: any) => {
		const isPropMatch = (prop: any) => prop.toLowerCase().includes(event.target.value.toLowerCase());
		const updatedItems = data.filter((item:any) => isPropMatch(item.name) || isPropMatch(item.type));
		this.setState({devices: updatedItems})
	};

	public render() {
		const { devices } = this.props;
        const { loading } = this.state as any;

        return (
            <main>
                <div className="container">
                    {loading
                        ? <Spinner/>
                        : (
                            <React.Fragment>
								<TextField
									fullWidth={true}
									id="standard-search"
									label="Search"
									type="search"
									margin="normal"
									onChange={this.onChange}
								/>
                                <SortableTable items={devices}/>
                            </React.Fragment>
                        )
                    }
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state: State) => ({
    devices: getAllDevices(state),
    loading: createLoadingSelector(GET_DEVICES.ACTION)(state),
});

export const Devices = connect(mapStateToProps)(DevicesComponent);
