import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'src/store/authServices';
import './Header.css';

class Control extends React.Component {

  public props: {
    loggedIn: boolean,
    signOut: any
  };

  public handleLogOut = () => {
    this.props.signOut();
  };

  public render() {

    return (
      <ul className={'control-panel'}>
        {!this.props.loggedIn
          ? <React.Fragment>
            <li>
              <Link
                className="btn"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
            <li>
              <span className="separate"> or </span>
              <Link
                className="btn"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </React.Fragment> :
          <li>
            <Link
              className="btn"
              to="/signin"
              onClick={this.handleLogOut}
            >
              Sign Out
            </Link>
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
