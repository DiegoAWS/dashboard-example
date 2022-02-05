import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import './App.scss';

import Sidebar from './Sidebar/Sidebar';
import { Box } from '@mui/material';



export default function App() {

  return (
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box component="main" className='mainContent'>


        </Box>
      </Box>
    </div>
  );
}
