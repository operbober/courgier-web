import * as React from 'react';
import {connect} from 'react-redux';
import {signUp} from 'src/store/authServices';
import {State} from 'src/store/interface/State';
import './Home.css';
import HomeWithoutSign from './HomeWithoutSign';
import HomeWithSign from './HomeWithSign';

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

const mapStateToProps = ({auth}: State) => ({
    loggedIn: auth.loggedIn,
});

export default connect(
    mapStateToProps,
    {signUp},
)(Home);
