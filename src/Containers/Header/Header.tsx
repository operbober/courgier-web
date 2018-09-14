import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
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
                    to="/login"
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
