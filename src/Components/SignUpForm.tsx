import { Button, FormControl, TextField } from '@material-ui/core';
import * as React from 'react';

export class SignUpForm extends React.Component {

  public state = {
    email: '',
    password: '',
  };

  public props: {
    signUp(email: string, password: string): void,
  };

  public handleFormFieldChange = (e: any) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  };

  public handleSignUp = (e: any) => {
    e.preventDefault();

    this.props.signUp(this.state.email, this.state.password);
  };

  public render() {
    return (
      <div className="container">
        <form className="login-form">
          <h2>Sign Up</h2>
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
              onClick={this.handleSignUp}
            >
              Sign Up
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}