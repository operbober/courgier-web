import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Control extends React.Component {

  public props: {
    loggedIn: boolean
  };

  public render() {
    return (
      <ul className={'control-panel'}>
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
          <span className="separate">or</span>
          <NavLink
            className="btn"
            activeClassName="active"
            exact={true}
            to="/signup"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = ({auth: {loggedIn}}) => ({
  loggedIn: loggedIn,
});

export default connect(
  mapStateToProps,
)(Control);
