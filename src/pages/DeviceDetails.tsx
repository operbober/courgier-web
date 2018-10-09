import * as React from 'react';
import {connect} from 'react-redux';
import {State} from '../model/State';

class DeviceDetails extends React.Component {
    public render() {
        return (
            <div>
                Ololo
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    pools: state.pool
});

export default connect(mapStateToProps, {})(DeviceDetails);
