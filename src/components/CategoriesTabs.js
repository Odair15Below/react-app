import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedCategoryTab, getData, getSelectedTabIndex } from '../store/app';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CategoryIcon from './CategoryIcon';
import CategoryTabContent from './CategoryOptions';
import { Box } from '@material-ui/core';

function a11yProps(index) {
  return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


export default function CategoriesTabs() {
  
  const data = useSelector(getData);

  const dispatch = useDispatch();
  const selectedTabIndex = useSelector(getSelectedTabIndex);
  const handleChange = (event, newValue) => {
    dispatch(changeSelectedCategoryTab(newValue));
  };
  
  return (
    <Box>
      <Tabs
        value={selectedTabIndex}
        onChange={handleChange}
        aria-label="categories navigation tabs"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile={true}
      >
        {data.map((item, index) => {
          return <Tab icon={<CategoryIcon category={item.category} />}
            label={item.category}
            key={index} 
            {...a11yProps(index)} />
        })}
      </Tabs>
      {
        data.map((item, index) => {
          return <CategoryTabContent key={index} value={selectedTabIndex} index={index} category={item}  />
        })
      }
    </Box>
  );
}
