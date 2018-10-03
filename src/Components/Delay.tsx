import * as React from 'react';
import {ReactNode} from 'react';

interface Props {
    children: ReactNode,
    wait?: number
}

interface State {
    waiting: boolean
}

export class Delay extends React.Component<Props, State> {

    public static defaultProps: Partial<Props> = {
        wait: 350
    };

    private timer: number;

    constructor(props: Props) {
        super(props);
        this.state = {
            waiting: true
        }
    }

    public componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                waiting: false
            });
        }, this.props.wait);
    }

    public componentWillUnmount() {
        clearTimeout(this.timer);
    }

    public render() {
        if (!this.state.waiting) {
            return this.props.children;
        }

        return null;
    }
}
