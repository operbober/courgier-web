import * as React from 'react';

export interface GenericListProps<T> {
    items: T[];
    itemRenderer: (item: T) => JSX.Element;
}

export class GenericList<T> extends React.Component<GenericListProps<T>, {}> {
    public render() {
        const {items, itemRenderer} = this.props;

        return (
            <React.Fragment>
                {items.map(itemRenderer)}
            </React.Fragment>
        );
    }
}
