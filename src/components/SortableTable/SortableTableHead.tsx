import * as React from 'react';
const {Component} = React;
import {
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

export default class GenericListHead extends Component {
    public props: {
        onRequestSort: any,
        order: any,
        orderBy: any,
        rows: any
    };
    public createSortHandler = (property:any) => (event:any) => {
        const {onRequestSort} = this.props as any;
        onRequestSort(event, property);
    };

    public render() {
        const { order, orderBy, rows } = this.props as any;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox" />
                    {rows.map((row: any) => {
                        return (
                            <TableCell
                                key={row.id}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === row.id}
                                        direction={order}
                                        onClick={this.createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}
