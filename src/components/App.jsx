import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListIcon from '@mui/icons-material/List';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ringstonetechIcon from '../assets/icons/ringstonetechIcon.png';

import './App.scss';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`
});


const ListSectionButton = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'active' })(({ active }) => ({
cursor:'pointer',
backgroundColor: active ? '#f5f5f5' : '#fff',
borderLeft: active ? '4px solid black' : 'none',
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {...closedMixin(theme),
      borderRight: 'none',},
    }),
  }),
);

export default function App() {
  const [open, setOpen] = useState(false);

  const isTableOrBiger = useMediaQuery('(min-width:600px)');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={isTableOrBiger && open}>

          <div className='companyTitleContainer'>
            <img src={ringstonetechIcon} alt="RingstoneTechIcon" width="56px" />
            <div className='companyTitle'>RingStone</div>
          </div>
          <div style={{ flex: 1 }}>
            <List>
              <ListSectionButton>
                <ListItemIcon>
                  <ListIcon className='blackColor' />
                </ListItemIcon>
                <ListItemText primary={'List of Services'} />
              </ListSectionButton>

              <ListSectionButton active={true}>
                <ListItemIcon>
                  <AssignmentIcon className='blackColor' />
                </ListItemIcon>
                <ListItemText primary={'Assignments'} />
              </ListSectionButton>

              <ListSectionButton>
                <ListItemIcon>
                  <AssessmentIcon className='blackColor' />
                </ListItemIcon>
                <ListItemText primary={'Reports'} />
              </ListSectionButton>

              <ListSectionButton>
                <ListItemIcon>
                  <LightModeIcon className='blackColor' />
                </ListItemIcon>
                <ListItemText primary={'Insights'} />
              </ListSectionButton>
            </List>
          </div>

          <ListItem button onClick={() => {
            if (open) {
              handleDrawerClose();
            } else {
              handleDrawerOpen();
            }
          }}>
            <ListItemIcon >

              <AccountCircleIcon className='blackColor' />

            </ListItemIcon>
            <ListItemText primary={'Account'} />
          </ListItem>

        </Drawer>
        <Box component="main" className='mainContent'>

       
        </Box>
      </Box>
    </div>
  );
}
