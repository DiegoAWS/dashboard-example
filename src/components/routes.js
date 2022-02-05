import { Navigate } from "react-router-dom";
import FuturePage from "../pages/FuturePage/FuturePage";

import ListIcon from '@mui/icons-material/List';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LightModeIcon from '@mui/icons-material/LightMode';

export const routes=[
    {
        url:'/',
        component:FuturePage,
        title:'Home',
        icon: null
    },
    {
        url:'/services',
        component:FuturePage,
        title:'List of Services',
        icon: <ListIcon />
    },
    {
        url:'/assignments',
        component:FuturePage,
        title:'Assignments',
        icon: <AssignmentIcon />
    },
    {
        url:'/report',
        component:Navigate,
        props:{to: '/reports/1'},
        title:'Reports',
        icon: <AssessmentIcon />
    },
    {
        url:'/insights',
        component:FuturePage,
        title:'Insights',
        icon: <LightModeIcon />
    }
]