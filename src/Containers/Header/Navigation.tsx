import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Navigation extends React.Component {

  public props: {
    loggedIn: boolean
  };

  public render() {
    return (
      <ul className="nav">
        <li>
          <NavLink
            className="btn"
            activeClassName="active"
            exact={true}
            to="/"
          >
            Home
          </NavLink>
        </li>
        {
          this.props.loggedIn &&
          <li>
              <NavLink
                  className="btn"
                  activeClassName="active"
                  exact={true}
                  to="/"
              >
                  logged
              </NavLink>
          </li>
        }
      </ul>
    );
  }
}

const mapStateToProps = ({auth}: {auth: { loggedIn: boolean}}) => ({
  loggedIn: auth.loggedIn,
});

export default connect(mapStateToProps)(Navigation);
