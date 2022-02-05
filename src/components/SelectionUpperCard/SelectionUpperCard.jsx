
import { ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import WhiteCard from '../WhiteCard/WhiteCard';
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

    return <WhiteCard className='SelectionUpperCardContainer'>
        <div className='titleContainer'>
            <div className='titleSection'>State</div>
            
        </div>
        <div className='buttonsContainer'>
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
            <ToggleButton active className='downloadButton'>
                <DownloadIcon />
            </ToggleButton>
        </div>
    </WhiteCard>

        ;
}

export default SelectionUpperCard;
