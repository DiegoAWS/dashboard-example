import { styled } from '@mui/material/styles';
import { ListItem } from "@mui/material";

export const ListSectionButton = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'active' })(({ active }) => ({
    cursor: 'pointer',
    backgroundColor: active ? '#f5f5f5' : '#fff',
    borderLeft: active ? '4px solid black' : 'none',
  }));
  