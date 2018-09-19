import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from 'src/Pages/Auth/services';
import './Header.css';

class Control extends React.Component {

  public props: {
    loggedIn: boolean,
    signOut: any
  };

  public render() {

    return (
      <ul className={'control-panel'}>
        {!this.props.loggedIn
          ? <React.Fragment>
            <li>
              <NavLink
                className="btn"
                activeClassName="active"
                exact={true}
                to="/signin"
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <span className="separate"> or </span>
              <NavLink
                className="btn"
                activeClassName="active"
                exact={true}
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
          </React.Fragment> :
          <li>
            <NavLink
              className="btn"
              activeClassName="active"
              exact={true}
              onClick={signOut}
              to="/signin"
            >
              Sign Out
            </NavLink>
          </li>
        }
      </ul>
    );
  }
}

const mapStateToProps = ({auth}: { auth: { loggedIn: boolean } }) => ({
  loggedIn: auth.loggedIn,
});

export default connect(
  mapStateToProps,
  {
    signOut: {signOut},
  },
)(Control);
