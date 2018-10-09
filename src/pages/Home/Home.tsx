import * as React from 'react';
import {connect} from 'react-redux';
import {State} from 'src/model/State';
import {signUp} from 'src/store/auth';
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
    loggedIn: !!auth.user,
});

export default connect(
    mapStateToProps,
    {signUp},
)(Home);
