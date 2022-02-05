
import { ButtonGroup, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import WhiteCard from '../WhiteCard/WhiteCard';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';

import './SelectionUpperCard.scss'
import ToggleButton from '../ToggleButton/ToggleButton';

const BUTTONS_SELECTOR = [
    'PROJECT',
    'MATURITY',
    'RISK',
    'SLIDES'
]

const SelectionUpperCard = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const theme = useTheme();
    const upDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.lg}px)`);


    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const itemClick = (index) => {
        setActiveButton(index)
        setAnchorEl(null);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

const donwloadButtonClick = () => {
    console.log('download')
}
    return <WhiteCard className='SelectionUpperCardContainer'>
        <div className='titleContainer'>
            <div className='titleSection'>State</div>

        </div>

        <div className='buttonsContainer'>
            {upDesktop ?
                <>
                    <ButtonGroup variant="outlined">
                        {BUTTONS_SELECTOR.map((button, index) =>
                            <ToggleButton
                                key={index}
                                active={activeButton === index}
                                onClick={() => setActiveButton(index)}

                            >
                                {button}
                            </ToggleButton>
                        )}
                    </ButtonGroup>
                    <ToggleButton active className='downloadButton' onClick={donwloadButtonClick}>
                        <DownloadIcon />
                    </ToggleButton>
                </>
                : <>
                    <ToggleButton
                        active
                        onClick={openMenu}
                    >
                        {BUTTONS_SELECTOR[activeButton]}
                    </ToggleButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={closeMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        {BUTTONS_SELECTOR.map((button, index) =>
                            <MenuItem key={index} onClick={() => itemClick(index)}>{button}</MenuItem>
                        )}

                        <Divider />
                        <MenuItem onClick={donwloadButtonClick}>
                            <DownloadIcon color='info'/>
                            Download
                        </MenuItem>
                    </Menu>
                </>
            }

        </div>
    </WhiteCard>

        ;
}

export default SelectionUpperCard;
