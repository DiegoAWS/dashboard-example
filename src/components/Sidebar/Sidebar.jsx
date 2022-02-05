import React, { useState } from 'react';
import { Drawer } from './styled/Drawer';
import { ListSectionButton } from './styled/ListSectionButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListIcon from '@mui/icons-material/List';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ringstonetechIcon from '../../assets/icons/ringstonetechIcon.png';

import { useMediaQuery } from '@mui/material';

import './Sidebar.scss';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const isTableOrBiger = useMediaQuery('(min-width:600px)');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return <Drawer className='sidebarDrawer' variant="permanent" open={isTableOrBiger && open}>

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
}

export default Sidebar;
