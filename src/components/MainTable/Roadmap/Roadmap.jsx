import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Box, ButtonGroup } from '@mui/material';
import ToggleButton from '../../ToggleButton/ToggleButton';
import SmallSlider from '../../SmallSlider/SmallSlider';
import { BUTTONS_INFLUENCE, rows, StyledTableCell, StyledTableRow } from '../../../utils/tableHelpers';

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
