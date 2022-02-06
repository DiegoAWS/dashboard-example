import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',

        '&:first-of-type': {
            textAlign: 'left',
        }
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    // },
    '& td, & th': {
        borderBottom: '1px solid #ececec',
    },

    // hide last border
    '&:last-of-type': {
        'td, th': {
            border: 0,
        }

    },
}));


const Roadmap = () => {
    return (
        <TableContainer component={Box}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Guidance</StyledTableCell>
                        <StyledTableCell>Influence</StyledTableCell>
                        <StyledTableCell>Current State</StyledTableCell>
                        <StyledTableCell>Future State</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell>{row.calories}</StyledTableCell>
                            <StyledTableCell>{row.fat}</StyledTableCell>
                            <StyledTableCell>{row.carbs}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default Roadmap;
