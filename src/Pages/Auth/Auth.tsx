import * as React from 'react';
import './Auth.css';

export default class Auth extends React.Component {
    public state = {
        email: '',
        password: ''
    };

    public render() {
        return (
            <div className="container">
                <form className="login-form">
                    <div className="input-holder">
                        <label htmlFor="email">E-mail*</label>
                        <input id="email" name="email" type="email" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="password">Password*</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    <div className="input-holder">
                        <button className="btn login" >Log In</button>
                    </div>
                    <div className="input-holder">
                        <button type="button" className="btn signup" >Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}