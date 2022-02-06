import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Box, ButtonGroup } from '@mui/material';
import ToggleButton from '../../ToggleButton/ToggleButton';
import SmallSlider from '../../SmallSlider/SmallSlider';

function createData(name, influence, currentState, futureState) {
    return { name, influence, currentState, futureState };
}

const rows = [
    createData('Healthy Use Of Metrics And Data To Drive Decisions For Product Planning', 3, 2, 4),
    createData('Roadmap Tools Usage Efficiency(E.g. Aha!)', 1, 1, 3),
    createData('Swot Awareness And Competitive Awareness', 3, 4, 2),
    createData('Configuration Mindset Vs Customizations', 2, 0, 0),
    createData('Tech Debt % Allocation / Investment Health', 2, 2, 5),
    createData('New Features % Allocation / Investment Health', 3, 1, 4),
    createData('Data-driven Decision Making', 3, 2, 0),
    createData('CooEffectiveness/role/ownership', 2, 0, 0),
    createData('Collaboration Health Between Product/engineering', 2, 0, 0),
    createData('Agility And Prioritization Mechanics', 3, 0, 0),

];

const BUTTONS_INFLUENCE = ['-', 'S', 'M', 'L'];


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

    const [data, setData] = useState({
        influence: rows.map(item => item.influence),
        currentState: rows.map(item => item.currentState),
        futureState: rows.map(item => item.futureState),
    });

    const updateData = (key, value, rowIndex) => {
        setData( prevState => ({
            ...prevState,
            [key]: prevState[key].map((item, i) => i === rowIndex ? value : item)
        }));
    };

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
                    {rows.map((row, rowIndex) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell>
                                <ButtonGroup variant="outlined">
                                    {BUTTONS_INFLUENCE.map((button, index) =>
                                        <ToggleButton
                                            key={index}
                                            active={data.influence[rowIndex] === index}
                                            onClick={() => updateData('influence', index, rowIndex)}
                                        >
                                            {button}
                                        </ToggleButton>
                                    )}
                                </ButtonGroup>
                            </StyledTableCell>
                            <StyledTableCell>
                                <SmallSlider
                                    value={data.currentState[rowIndex]}
                                    onChange={(event, value) => updateData('currentState', value, rowIndex)}
                                />

                            </StyledTableCell>
                            <StyledTableCell>
                            <SmallSlider
                                    value={data.futureState[rowIndex]}
                                    onChange={(event, value) => updateData('futureState', value, rowIndex)}
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default Roadmap;
