import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from 'src/store/authServices/index';
import { State } from 'src/store/interface/State.js';
import Control from './Control';
import './Header.css';
import Navigation from './Navigation';

class Header extends React.Component {

  public props: {
    loggedIn: boolean,
    signOut: () => void ,
  };

  public render() {

    return (
      <header id="header">
        <div className="container">
          <strong className="logo">
            <NavLink
              exact={true}
              to="/"
            >
              <img src="./images/logo.png" alt="react-training"/>
            </NavLink>
          </strong>
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
  loggedIn: auth.loggedIn,
});

export default connect(
  mapStateToProps,
  {signOut}
)(Header);
