import { styled } from '@mui/material/styles';
import { ListItem } from "@mui/material";

export const ListSectionButton = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'active' })(({ active, theme }) => ({
    cursor: 'pointer',
    backgroundColor: active ? '#f5f5f5' : '#fff',
    paddingLeft: theme.spacing(1.5),
    borderLeftWidth: theme.spacing(0.5),
    borderLeftStyle: 'solid',
    borderLeftColor: active ? 'black' : 'transparent',
  }));
  