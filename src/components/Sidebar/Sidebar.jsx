import React from 'react';

import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ringstonetechIcon from '../../assets/icons/ringstonetechIcon.png';

import Drawer from '../Drawer/Drawer';
import ListSectionButton from '../ListSectionButton/ListSectionButton';


import { routes } from '../routes';
import BlackLink from '../BlackLink/BlackLink';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../GlobalContext';

import './Sidebar.scss';
import UserSection from '../UserSection/UserSection';

const Sidebar = () => {
    const { openSidebarState } = useGlobalContext();

    const location = useLocation();

    const currentRoute = '/' + location.pathname.split('/')[1];

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

       <UserSection />

    </Drawer>
}

export default Sidebar;
