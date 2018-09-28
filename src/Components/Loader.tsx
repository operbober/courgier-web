import { CircularProgress } from '@material-ui/core';
import * as React from 'react';

export default class CircularIndeterminate extends React.Component {
  public render() {
    return (
      <div className="progress">
        <CircularProgress className="progress-circle"/>
      </div>
    );
  }
}