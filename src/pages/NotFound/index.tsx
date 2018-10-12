import * as React from 'react';
import './NotFound.css';

class NotFoundComponent extends React.Component {
    public render() {
        return (
            <div className="NotFound">
                <strong style={{fontSize: '50pt'}}>404</strong>
                <strong style={{fontSize: '50pt'}}>Page Not Found</strong>
            </div>
        );
    }
}

export const NotFound = NotFoundComponent;
