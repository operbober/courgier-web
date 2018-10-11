import * as React from 'react';
const {Component, Fragment} = React;

export interface GenericListProps<T> {
    items: T[];
}

export abstract class GenericList<T> extends Component<GenericListProps<T>, {}> {

    public render() {
        const {items} = this.props;

        return (
            <Fragment>
                {items.map(this.itemRenderer)}
            </Fragment>
        );
    }

    protected abstract itemRenderer(item: T): JSX.Element;
}
