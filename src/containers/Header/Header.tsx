import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signOut} from 'src/store/auth/action';
import {State} from 'src/store/State';
import {PATHS} from '../../router/Paths';
import {isAuthenticated} from '../../store/selector';
import Control from './Control';
import './Header.css';
import logo from './images/logo.png';
import Navigation from './Navigation';


interface Props {
    isAuthenticated: boolean,
    signOut: () => void,
}

class Header extends React.Component<Props> {

    public render() {

        return (
            <header id="header">
                <div className="container">
                    <Link to={PATHS.HOME}>
                        <div className="logo">
                            <img src={logo} alt="react-training"/>
                        </div>
                    </Link>
                    <div className="nav-holder">
                        <Navigation isAuthenticated={this.props.isAuthenticated}/>
                        <Control {...this.props}/>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state: State) => ({
    isAuthenticated: isAuthenticated(state),
});

export default connect(
    mapStateToProps,
    {signOut},
)(Header);
