import * as React from 'react';
const {Component, Fragment} = React;
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core';
import SortableTableHead from './SortableTableHead'

const Online = () =>
    <svg fill="#2bb36f" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>

const Offline = () =>
    <svg fill="#fd5c52" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>

export interface SortableTableProps<T> {
    items: T[];
}

function desc(a:any, b:any, orderBy:any) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array:any, cmp:any) {
    const stabilizedThis = array.map((el:any, index:any) => [el, index]);
    stabilizedThis.sort((a:any, b:any) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el:any) => el[0]);
}

function getSorting(order:any, orderBy:any) {
    return order === 'desc' ? (a:any, b:any) => desc(a, b, orderBy) : (a:any, b:any) => -desc(a, b, orderBy);
}

export abstract class SortableTable<T> extends Component<SortableTableProps<T>, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            rows: [
                { id: 'status', label: 'Status' },
                { id: 'type', label: 'Type' },
                { id: 'name', label: 'Name' },
                { id: 'lastPollTime', label: 'Last Poll Time' },
            ],
        };
    }

    public handleRequestSort = (event:any, property:any) => {
        const {orderBy, order } = this.state as any;
        const orderByUpdated = property;
        let orderUpdated = 'desc';

        if (orderBy === property && order === 'desc') {
            orderUpdated = 'asc';
        }

        this.setState({ order: orderUpdated, orderBy: orderByUpdated });
    };

    public render() {
        const {items} = this.props;
        const { rows, order, orderBy } = this.state as any;

        return (
            <Fragment>
                <Paper>
                    <Table padding="dense">
                        <SortableTableHead
                            order={order}
                            orderBy={orderBy}
                            rows={rows}
                            onRequestSort={this.handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(items, getSorting(order, orderBy))
                                .map((n:any) => {
                                    return (
                                        <TableRow
                                            hover={true}
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={n.id}
                                        >
                                            <TableCell padding="checkbox">
                                                <span className={`icon-${n.type}`} />
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    n.status ?
                                                        <Online />
                                                        :
                                                        <Offline />
                                                }
                                            </TableCell>
                                            <TableCell>{n.type}</TableCell>
                                            <TableCell>{n.name}</TableCell>
                                            <TableCell>{n.lastPollTime}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </Paper>
            </Fragment>
        );
    }
}
