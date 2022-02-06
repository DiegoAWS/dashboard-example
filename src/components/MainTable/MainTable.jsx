import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import WhiteCard from '../WhiteCard/WhiteCard';

import './MainTable.scss';
import Roadmap from './Roadmap/Roadmap';
import { tabsList } from '../../utils/const';

const MainTable = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return <div className='mainTableContainer'>
    <WhiteCard className='whiteCard'>
      <div className='tabsContainer'>

        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={activeTab}
          onChange={handleChange}
        >
          {tabsList.map((tab, index) =>
            <Tab key={index} label={tab.toUpperCase()} wrapped className='tabsButton'/>
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
                    <Box className='roadMapContainer'>
                      <Roadmap />
                    </Box>
                  )
                  : (
                    <Box className='roadMapContainer'>
                      <Typography>- {tab}</Typography>
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
