import * as React from 'react';
import './Header.css';

export default class Header extends React.Component {
    public render() {
        return (
            <header id="header">
                <div className="container">
                    <strong className="logo">
                        <a href="/">
                            <img src="./images/logo.svg" alt="react-training"/>
                        </a>
                    </strong>
                </div>
            </header>
        )
    }
}
