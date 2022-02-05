import React, { useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ringstonetechIcon from '../../assets/icons/ringstonetechIcon.png';

import { useMediaQuery, useTheme } from '@mui/material';

import './Sidebar.scss';
import Drawer from '../Drawer/Drawer';
import ListSectionButton from '../ListSectionButton/ListSectionButton';


import { routes } from '../routes';
import BlackLink from '../BlackLink/BlackLink';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const upTablet = useMediaQuery(`(min-width:${theme.breakpoints.values.sm}px)`);

    const location = useLocation();

    const currentRoute = '/' + location.pathname.split('/')[1];
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return <Drawer className='sidebarDrawer' variant="permanent" open={upTablet && open}>
        <BlackLink to='/' >
            <div className='companyTitleContainer'>
                <img src={ringstonetechIcon} alt="RingstoneTechIcon" width="56px" />
                <div className='companyTitle'>RingStone</div>
            </div>
        </BlackLink>
        <div style={{ flex: 1 }}>
            <List>
                {routes.filter(item => item.icon).map((route) =>
                    <BlackLink key={route.url} to={route.url}>
                        <ListSectionButton active={route.url === currentRoute}>
                            <ListItemIcon className='blackColor' >
                                {route.icon}
                            </ListItemIcon>
                            <ListItemText primary={route.title} />
                        </ListSectionButton>
                    </BlackLink>
                )}

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
}

export default Sidebar;
