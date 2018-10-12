import * as React from 'react';
import {connect} from 'react-redux';
import {State} from 'src/store/State';
import {isAuthenticated} from '../../store/selector';
import HomeWithSign from '../Devices';
import HomeWithoutSign from '../Info';

class Home extends React.Component {

    public props: {
        loggedIn: boolean,
    };

    public render() {

        return (
            <main>
                {!this.props.loggedIn
                    ? <HomeWithoutSign/>
                    : <HomeWithSign/>
                }
            </main>
        );
    }
}

const mapStateToProps = (state: State) => ({
    loggedIn: isAuthenticated(state)
});

export default connect(mapStateToProps)(Home);
