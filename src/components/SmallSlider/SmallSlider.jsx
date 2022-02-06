import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider, SliderThumb } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const COLORS_BUTTON = [
    '#ffffff',
    '#e85443',
    '#f3a93b',
    '#f9d849',
    '#a7eb99',
    '#377d23'
]
const DEGREES_ARROWS = ['0', '0', '45', '90', '135', '180'];

const CustomSlider = styled(Slider)(
    ({ value }) =>
    ({

        height: 2,
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: COLORS_BUTTON[value],

            border: `1px solid ${value === 0 ? '#000000' : COLORS_BUTTON[value]}`,

            '& .arrowIcon': {
                transform: `rotate(-${DEGREES_ARROWS[value]}deg)`
            },

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
    }));

const CustomThumb = ({ children, ...other }) => {

    return (
        <SliderThumb {...other}>
            {children}
            <ArrowDownwardIcon className='arrowIcon' htmlColor='white' />
        </SliderThumb>
    );
}

const SmallSlider = ({ value, onChange }) => {

    return <CustomSlider
        components={{ Thumb: CustomThumb }}
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
