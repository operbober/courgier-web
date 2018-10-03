import {CircularProgress} from '@material-ui/core';
import * as React from 'react';
import {Delay} from './Delay';

export default class CircularIndeterminate extends React.Component {
    public render() {
        return (
            <Delay>
                <div className="progress">
                    <CircularProgress className="progress-circle"/>
                </div>
            </Delay>
        );
    }
}
