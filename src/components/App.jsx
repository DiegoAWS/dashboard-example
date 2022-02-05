import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import Sidebar from './Sidebar/Sidebar';
import { Box } from '@mui/material';
import Report from './Report/Report';

export default function App() {

  return (
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route exact path="/report/:id" element={<Report />} />

            <Route path="*" element={<Navigate to="/report/1" />} />
          </Routes>

        </Box>
      </Box>
    </div>
  );
}
