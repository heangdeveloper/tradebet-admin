import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TableContainer from '@mui/material/TableContainer';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Icon } from "@iconify/react";

type Order = 'asc' | 'desc';

interface Column {
    id: string;
    label: string;
    numeric?: boolean;
    disablePadding?: boolean;
    render?: (row: any) => React.ReactNode;
}

interface DataTableProps {
    rows: any[];
    columns: Column[];
    pageSizeOptions?: number[];
    checkboxSelection?: boolean;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
}

function getComparator<Key extends keyof any>(order: Order, orderBy: Key) {
    return order === 'desc'
        ? (a: any, b: any) => descendingComparator(a, b, orderBy)
        : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

export default function DataTable ({
    rows,
    columns,
    pageSizeOptions = [10, 15, 20],
}: DataTableProps) {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<string>(columns[0]?.id || '');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);

    const handleRequestSort = (property: string) => () => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const getRowId = (row: any) => row.id || row.name;

    const visibleRows = React.useMemo(() => {
        return [...rows]
            .sort(getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [rows, order, orderBy, page, rowsPerPage]);

    return (
        <>
            <TableContainer>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "24px",
                    }}
                >
                    <Box
                        sx={{
                            marginLeft: "auto",
                        }}
                    >
                        <FormControl>
                            <TextField size="small" sx={{ width: "200px" }} placeholder="Search..."/>
                        </FormControl>
                    </Box>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.numeric ? 'right' : 'left'}
                                    padding={column.disablePadding ? 'none' : 'normal'}
                                    sortDirection={orderBy === column.id ? order : false}
                                >
                                    <Box sx={(theme) => ({
                                        position: "relative",
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        color: (theme.vars || theme).palette.text.secondary,
                                        textTransform: "uppercase",
                                        textAlign: "left",
                                        backgroundColor: "transparent",
                                        opacity: 0.7,
                                        userSelect: "none",
                                    })}>
                                        {column.label}
                                        <Box
                                            onClick={handleRequestSort(column.id)}
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                right: "16px",
                                                left: "unset",
                                                fontSize: "16px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Box
                                                sx={(theme) => ({
                                                    position: "absolute",
                                                    top: "-6px",
                                                    color:
                                                        orderBy === column.id && order === "asc"
                                                        ? (theme.vars || theme).palette.text.primary
                                                        : (theme.vars || theme).palette.text.secondary,
                                                    backgroundColor: "transparent",
                                                    opacity: orderBy === column.id && order === "asc" ? 1 : 0.4,
                                                    transition: "opacity 0.2s",
                                                })}
                                            >
                                                <Icon icon="solar:alt-arrow-up-bold" width={14} height={14} />
                                            </Box>
                                            <Box
                                                sx={(theme) => ({
                                                    position: "absolute",
                                                    top: 0,
                                                    color:
                                                        orderBy === column.id && order === "desc"
                                                        ? (theme.vars || theme).palette.text.primary
                                                        : (theme.vars || theme).palette.text.secondary,
                                                    backgroundColor: "transparent",
                                                    opacity: orderBy === column.id && order === "desc" ? 1 : 0.4,
                                                    transition: "opacity 0.2s",
                                                })}
                                            >
                                                <Icon icon="solar:alt-arrow-down-bold" width={14} height={14} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row) => {
                            const rowId = getRowId(row);
                            return (
                                <TableRow
                                    tabIndex={-1}
                                    key={row.id}
                                >
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.numeric ? 'right' : 'left'}>
                                            <Box>{column.render ? column.render(row) : row[column.id]}</Box>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody> 
                </Table>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "24px",
                    }}
                >
                    <Box>
                        <Typography variant="button">Showing 1 to 10 of 12 entries</Typography>
                    </Box>
                    <Box>
                        
                    </Box>
                </Box>
            </TableContainer>
        </>
    )
}