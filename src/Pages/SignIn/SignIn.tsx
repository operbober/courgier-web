import {Button, FormControl, TextField} from '@material-ui/core';
import * as React from 'react';
import {connect} from 'react-redux';
import {signIn} from 'src/store/authServices/';
import './style.css';

export class SignIn extends React.Component {

    public state = {
        email: '',
        password: '',
    };

    public props: {
        signIn(email: string, password: string): void,
    };

    public handleFormFieldChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    public handleSubmit = (e: any) => {
        e.preventDefault();

        this.props.signIn(this.state.email, this.state.password);
    };

    public render() {
        return (
            <main>
                <div className="container">
                    <form className="login-form">
                        <h2>Sign In</h2>
                        <FormControl className="input-holder">
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="E-mail"
                                placeholder="pat@buynlarge.com"
                                margin="normal"
                                onChange={this.handleFormFieldChange}
                            />
                        </FormControl>
                        <FormControl className="input-holder">
                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="password"
                                margin="normal"
                                onChange={this.handleFormFieldChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Button
                                className="login"
                                variant="outlined"
                                color="primary"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                Sign In
                            </Button>
                        </FormControl>
                    </form>
                </div>
            </main>
        );
    }
}

export default connect(
    ({}) => ({}),
    {
        signIn,
    },
)(SignIn);
