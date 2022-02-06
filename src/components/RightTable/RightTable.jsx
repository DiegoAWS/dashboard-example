import React from 'react';

import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { StyledTableCell, StyledTableRow } from '../../utils/tableHelpers';
import ArrowColored from '../ArrowColored/ArrowColored';
import WhiteCard from '../WhiteCard/WhiteCard';
import './RightTable.scss';
import { tabsList } from '../../utils/const';

const RightTable = () => {
    return <div className='rightTableContainer'>

        <TableContainer component={WhiteCard}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>L1 Maturity</StyledTableCell>
                        <StyledTableCell>Current</StyledTableCell>
                        <StyledTableCell>Future</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tabsList.map((row, index) => (
                        <StyledTableRow key={row}>
                            <StyledTableCell component="th" scope="row">
                                {row}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                <div className='centeredContent'>
                                    <ArrowColored value={index === 0 ? 2 : 0} />
                                </div>

                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                <div className='centeredContent'>
                                    <ArrowColored value={index === 0 ? 3 : 0} />
                                </div>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </div>;
}

export default RightTable;
