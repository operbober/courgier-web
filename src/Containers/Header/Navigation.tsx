import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

class Navigation extends React.Component {

  public props: {
    loggedIn: boolean
  };

  public render() {
    return (
      <ul className="nav">
        <li>
          <Link
            className="btn"
            to="/"
          >
            Home
          </Link>
        </li>
        {
          this.props.loggedIn &&
          <li>
              <Link
                  className="btn"
                  to="/"
              >
                  logged
              </Link>
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
