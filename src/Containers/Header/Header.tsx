import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Header.css';

export class Header extends React.Component {
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
            <ul className="nav">
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
          </div>
        </header>
    )
  }
}

export default withRouter(props => <Header {...props}/>)