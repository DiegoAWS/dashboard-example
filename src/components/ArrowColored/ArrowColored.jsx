import { styled } from '@mui/material/styles';
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

const RotateCircle = styled('div', { shouldForwardProp: (prop) => prop !== 'value' })(
    ({ value=0 }) => {

        return ({
            height: 24,
            width: 24,
            backgroundColor: COLORS_BUTTON[value],
            border: `1px solid ${value === 0 ? '#000000' : COLORS_BUTTON[value]}`,
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',

            '& .arrowIcon': {

                transform: `rotate(-${DEGREES_ARROWS[value]}deg)`
            },


        })
    }
);


const ArrowColored = ({ children, value, ownerState, ...other }) => {

    return (
        <RotateCircle value={value !== undefined ? value : ownerState?.value} {...other}>
            {children}
            <ArrowDownwardIcon className='arrowIcon' htmlColor='white' />
        </RotateCircle>
    );
}

export default ArrowColored;
