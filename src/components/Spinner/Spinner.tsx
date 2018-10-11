import {CircularProgress} from '@material-ui/core';
import * as React from 'react';
import {Delay} from '../Delay';
import './Spinner.css'

export class Spinner extends React.Component {
    public render() {
        return (
            <Delay>
                <div className="spinner-container">
                    <CircularProgress className="spinner"/>
                </div>
            </Delay>
        );
    }
}
