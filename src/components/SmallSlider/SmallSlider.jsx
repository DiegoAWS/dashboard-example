import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import ArrowColored from '../ArrowColored/ArrowColored';

const CustomSlider = styled(Slider)({
    height: 2,
    '& .MuiSlider-thumb': {
        display: 'flex',
        position: 'relative',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        
        '& .MuiSlider-rail': {
            backgroundColor: 'gray',
            border: 'none'
        },
        '& .MuiSlider-track': {
            backgroundColor: 'black',
            border: 'none'
        },

        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
});


const SmallSlider = ({ value, onChange }) => {

    return <CustomSlider
        components={{ Thumb: ArrowColored }}
        value={value}
        onChange={onChange}
        step={1}
        valueLabelDisplay="off"
        size="small"
        min={0}
        max={5}
    />;
}

export default SmallSlider;
