import { Button } from '@mui/material';

const ToggleButton = ({ active, color, variant, children, ...props }) => {
  
    const newColor = (active !== undefined) ? 'info' : color;
    const newVariant = active ? 'contained' : variant;

    return <Button color={newColor} variant={newVariant} {...props}>
        {children}
    </Button>;
}

export default ToggleButton;
