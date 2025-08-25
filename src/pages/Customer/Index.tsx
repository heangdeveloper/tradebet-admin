import React from 'react'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DataTable from '../../components/DataTable'
import { Icon } from "@iconify/react";

const rows = [
    {
        id: "#10421",
        img: "https://demos.creative-tim.com/material-dashboard-pro-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
        name: 'Sim Kimheang',
        phone: '(+855)11263262',
        date: '1 Nov, 10:20 AM',
        status: 'Canceled',
    },
    {
        id: "#10422",
        img: "",
        name: 'John Doe',
        phone: '(+855)966561101',
        date: '1 Nov, 10:53 AM',
        status: 'Paid',
    },
    {
        id: "#10423",
        img: "",
        name: 'Michael Mirra',
        phone: '(+855)966561101',
        date: '1 Nov, 11:13 AM',
        status: 'Paid',
    },
    {
        id: "#10424",
        img: "",
        name: 'Andrew Nichel',
        phone: '(+855)966561101',
        date: '1 Nov, 12:20 PM',
        status: 'Paid',
    },
    {
        id: "#10425",
        img: "",
        name: 'Sebastian Koga',
        phone: '(+855)966561101',
        date: '1 Nov, 1:40 PM',
        status: 'Paid',
    },
    {
        id: "#10426",
        img: "",
        name: 'Laur Gilbert',
        phone: '(+855)966561101',
        date: '1 Nov, 2:19 PM',
        status: 'Paid',
    },
    {
        id: "#10427",
        img: "",
        name: 'Iryna Innda',
        phone: '(+855)966561101',
        date: '1 Nov, 3:42 AM',
        status: 'Paid',
    },
    {
        id: "#10428",
        img: "",
        name: 'Arrias Liunda',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
    {
        id: "#10429",
        img: "",
        name: 'Rugna Ilpio',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
    {
        id: "#10430",
        img: "",
        name: 'Anna Landa',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
];

const columns = [
    { id: 'id', label: 'id' },
    {
        id: 'name',
        label: 'Name',
        render: (row: any) => (
        <Stack direction="row" spacing={2} alignItems="center">
            {row.img ? (
                <Avatar alt={row.name} src={row.img} />
            ) : (
                <Avatar
                    sx={(theme) => ({
                        fontSize: "12px",
                        fontWeight: 600,
                        backgroundColor: (theme.vars || theme).palette.primary.main
                    })}
                >{row.name.charAt(0)}</Avatar>
            )}
            <Box>
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontSize: "12px"
                    }}
                >
                    {row.name}
                </Typography>
            </Box>
        </Stack>
        )
    },
    { id: 'phone', label: 'phone' },
    { id: 'date', label: 'date' },
    { id: 'status', label: 'status' },
    {
        id: 'action',
        label: 'Action',
        render: (row: any) => (
            <Stack sx={{ alignItems: "center", flexFlow: "nowrap", gap: 1 }}>
                <IconButton><Icon icon="solar:pen-2-bold-duotone"/></IconButton>
                <IconButton><Icon icon="solar:trash-bin-minimalistic-bold"/></IconButton>
            </Stack>
        )
    },
];


const ListCustomers = () => {
    return (
        <>
            <Stack></Stack>
            <Paper elevation={0}>
                <DataTable
                    rows={rows}
                    columns={columns}
                />
            </Paper>
        </>
    )
}

export default ListCustomers