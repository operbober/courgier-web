import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Control from './Control';
import './Header.css';
import Navigation from './Navigation';

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
          <div className="nav-holder">
            <Navigation/>
            <Control/>
          </div>
        </div>
      </header>
    );
  }
}

