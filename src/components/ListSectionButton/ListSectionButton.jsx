
import { ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const ListSectionButton = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'active' })(({ active, theme }) => ({
    cursor: 'pointer',
    backgroundColor: active ? '#f5f5f5' : '#fff',
    paddingLeft: theme.spacing(1.5),
    borderLeftWidth: theme.spacing(0.5),
    borderLeftStyle: 'solid',
    borderLeftColor: active ? 'black' : 'transparent',
}));

export default ListSectionButton;