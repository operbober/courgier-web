import {CircularProgress} from '@material-ui/core';
import * as React from 'react';
import './Spinner.css'

export class Spinner extends React.Component {
    public render() {
        return (
            <div className="spinner-container">
                <CircularProgress className="spinner"/>
            </div>
        );
    }
}
