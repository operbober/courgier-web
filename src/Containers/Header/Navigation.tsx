import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Navigation extends React.Component {

  public props: {
    loggedIn: boolean
  };

  public render() {
    return (
      <ul className="nav">
        {
          this.props.loggedIn &&
          <li>
              <Link
                  className="btn"
                  to="/"
              >
                  Devices
              </Link>
          </li>
        }
      </ul>
    );
  }
}

