import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import WhiteCard from '../WhiteCard/WhiteCard';

import './MainTable.scss';
import Roadmap from './Roadmap/Roadmap';

const tabsList = [
  'ROADMAP & STRATEGY',
  'ORGANIZATION & TEAM',
  'ARCHITECTURE & CODE',
  'PRODUCT IT INFRATRUSCTURE',
  'SDLC. Qality & TOOLS',
  'CUSTUMER SUPORT',
  'PROFESIONAL SERVICES',
  'PORTFOLIO STRATEGY'
]

const MainTable = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return <div className='mainTableContainer'>
    <WhiteCard >
      <div className='tabsContainer'>

        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={activeTab}
          onChange={handleChange}
        >
          {tabsList.map((tab, index) =>
            <Tab key={index} label={tab} wrapped className='tabsButton'/>
          )}
        </Tabs>
        <>
          {tabsList.map((tab, index) =>
            <div
              key={index}
              role="tabpanel"
              hidden={activeTab !== index}
            >
              {activeTab === index && (
                activeTab === 0
                  ? (
                    <Box sx={{ p: 3 }}>
                      <Roadmap />
                    </Box>
                  )
                  : (
                    <Box sx={{ p: 3 }}>
                      <Typography>{index}-{tab}</Typography>
                    </Box>
                  )
              )}
            </div>
          )}
        </>
      </div>
    </WhiteCard >
  </div >;
}

export default MainTable;
