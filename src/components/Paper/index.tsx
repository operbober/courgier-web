import * as React from 'react';
import './Paper.css'

interface Props {
    children: any,
}

export default class Paper extends React.Component<Props> {

	public render() {
        const { children } = this.props;

        return (
            <div className="paper">
                {children}
            </div>

        )

    }
}
