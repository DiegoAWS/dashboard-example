
import React, { useState } from 'react';
import { Divider, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Switch } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useGlobalContext } from '../GlobalContext';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Logout from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import './UserSection.scss'

function UserSection() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { openSidebarState, setOpenSidebar } = useGlobalContext();

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebarState);
    };

    return <>
        <ListItem button onClick={handleClick} >
            <ListItemIcon >
                <AccountCircleIcon className='blackColor' />
            </ListItemIcon>
            <ListItemText primary={'Account'} />
        </ListItem>

        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem className='noCursorPointer'>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                Small Sidebar
                <Switch value={!openSidebarState} onChange={toggleSidebar} />
            </MenuItem>
            <MenuItem disabled>
                <ListItemIcon>
                    <ManageAccountsIcon />
                </ListItemIcon>
                My account</MenuItem>
            <Divider />
            <MenuItem disabled>
                <ListItemIcon>
                    <Logout />
                </ListItemIcon>
                Logout</MenuItem>
        </Menu>
    </>
}

export default UserSection;
