import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const ListCustomers = () => {
    return (
        <>
            <Stack></Stack>
            <Paper elevation={0}>
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
            </Paper>
        </>
    )
}

export default ListCustomers