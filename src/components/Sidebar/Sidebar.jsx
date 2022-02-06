import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ringstonetechIcon from '../../assets/icons/ringstonetechIcon.png';

import Drawer from '../Drawer/Drawer';
import ListSectionButton from '../ListSectionButton/ListSectionButton';


import { routes } from '../routes';
import BlackLink from '../BlackLink/BlackLink';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../GlobalContext';

import './Sidebar.scss';

const Sidebar = () => {
 const { openSidebarState, setOpenSidebar} = useGlobalContext();

    const location = useLocation();

    const currentRoute = '/' + location.pathname.split('/')[1];
    
    const handleDrawerOpen = () => {
        setOpenSidebar(true);
    };

    const handleDrawerClose = () => {
        setOpenSidebar(false);
    };

    return <Drawer className='sidebarDrawer' variant="permanent" open={openSidebarState}>
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
            if (openSidebarState) {
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
