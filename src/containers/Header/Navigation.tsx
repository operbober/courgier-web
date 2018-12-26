import * as React from 'react';
import {Link} from 'react-router-dom';
import {PATHS} from '../../router/Paths';
import './Header.css';

interface Props {
    isAuthenticated: boolean
}

export default class Navigation extends React.Component<Props> {

    public render() {
        return (
            <ul className="nav">
                {
                    this.props.isAuthenticated &&
                    <li>
                        <Link
                            className="btn"
                            to={PATHS.DEVICES}
                        >
                            Data Sources
                        </Link>
                    </li>
                }
                <li>
                    <Link
                        className="btn"
                        to={PATHS.INFO}
                    >
                        Info
                    </Link>
                </li>
            </ul>
        )
    }

}


