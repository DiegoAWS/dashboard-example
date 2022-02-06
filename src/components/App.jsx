import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import Sidebar from './Sidebar/Sidebar';
import { Box } from '@mui/material';
import Report from '../pages/Report/Report';

import BaseImage from './BaseImage/BaseImage';
import { routes } from './routes';
import { GlobalContextProvider } from './GlobalContext';

import './App.scss';

const App = () => {

  return (
    <GlobalContextProvider>
      <div className='App'>
        <BaseImage />
        <Box className='drawerContainer'>
          <CssBaseline />
          <Sidebar />
          <Box component="main" className='main'>
            <Routes>
              {routes.map((route) =>
                <Route
                  exact
                  key={route.url}
                  path={route.url}
                  element={<route.component title={route.title} {...(route.props || {})} />}
                />
              )}

              <Route exact path="/report/:id" element={<Report />} />
              <Route path="*" element={<Navigate to="/report/1" />} />
            </Routes>

          </Box>
        </Box>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
