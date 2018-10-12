import * as React from 'react';
import {Link} from 'react-router-dom';
import {Paths} from '../../router/Paths';
import './Header.css';

interface Props {
    isAuthenticated: boolean
}

export default class Navigation extends React.Component<Props> {

    public render() {
        return (
            <ul className="nav">
                <li>
                    <Link
                        className="btn"
                        to={Paths.INFO}
                    >
                        Info
                    </Link>
                </li>
                {
                    this.props.isAuthenticated &&
                    <li>
                        <Link
                            className="btn"
                            to={Paths.DEVICES}
                        >
                            Devices
                        </Link>
                    </li>
                }
            </ul>
        )
    }

}


