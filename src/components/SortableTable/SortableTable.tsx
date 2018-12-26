import * as React from 'react';
const {Component, Fragment} = React;
import * as moment from 'moment';
import {Link} from 'react-router-dom';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core';
import SortableTableHead from './SortableTableHead';
import {PATHS} from '../../router/Paths';
import { DataSourceStatusIcon } from '../DataSourceStatusIcon';
import { DataSourceTypeIcon } from '../DataSourceTypeIcon';

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
                                                <DataSourceTypeIcon type={n.type.toLowerCase()} />
                                            </TableCell>
                                            <TableCell>
                                                <DataSourceStatusIcon status={n.status}/>
                                            </TableCell>
                                            <TableCell>{n.type}</TableCell>
                                            <TableCell>
                                                <Link to={`${PATHS.DEVICE_DETAILS}/${n.id}`}>
                                                    {n.name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>{moment(n.lastPollTime).fromNow()}</TableCell>
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
