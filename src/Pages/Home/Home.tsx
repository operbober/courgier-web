import { Button } from '@material-ui/core';
import * as React from 'react';
import './Home.css';

export default class Home extends React.Component {
  public render() {
    return (
        <React.Fragment>
          <div className="container">
            <h1>Login</h1>
            <Button
                color="primary"
                variant="contained"
            >
              11
            </Button>
          </div>
        </React.Fragment>
    )
  }
}