import * as React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Control extends React.Component {

    public props: {
        isAuthenticated: boolean,
        signOut: () => void,
    };

    public handleLogOut = () => {
        this.props.signOut();
    };

    public render() {

        return (
            <ul className={'control-panel'}>
                {!this.props.isAuthenticated
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
