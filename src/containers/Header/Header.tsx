import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signOut} from 'src/store/auth/action';
import {State} from 'src/store/State';
import Control from './Control';
import './Header.css';
import logo from './images/logo.png';
import Navigation from './Navigation';

class Header extends React.Component {

    public props: {
        loggedIn: boolean,
        signOut: () => void,
    };

    public render() {

        return (
            <header id="header">
                <div className="container">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="react-training"/>
                        </div>
                    </Link>
                    <div className="nav-holder">
                        <Navigation loggedIn={this.props.loggedIn}/>
                        <Control {...this.props}/>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = ({auth}: State) => ({
    loggedIn: !!auth.user,
});

export default connect(
    mapStateToProps,
    {signOut},
)(Header);
