import React from 'react';
import { Box, Tabs, Tab, TextField, Select, MenuItem, InputAdornment, FormControl, Grid } from '@mui/material';
import Search from '../../assets/images/icons/Search';
import Course from '../../assets/images/icons/Course';
import Communities from '../../assets/images/icons/Communities';
import MyCoursesTab from './Course/MyCoursesTab';
import MyCommunitiesTab from './MyCommunitiesTab';  

function MyTraining() {
  const [tabValue, setTabValue] = React.useState(0);
  const [selectValue, setSelectValue] = React.useState('option1');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };


  return (
    <Box className='training-tabs' sx={{ height: '100%' }}>
      <Box className='tabs-head-wrapper'>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="training tabs">
          <Tab icon={<Course />} iconPosition="start" label="My Courses" />
          <Tab icon={<Communities />} iconPosition="start" label="My Communities" />
        </Tabs>
        <Grid container sx={{flexGrow: 1, justifyContent: 'flex-end'}} spacing={2}>
          <Grid size={{xs: 12,sm: 6, md:5, xl: 3.5}}>
            <TextField className='input-ui' label="Outlined" placeholder="Search" fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid size={{xs: 12,sm: 6, md:4, xl: 2.1}}>
            <FormControl variant="outlined" fullWidth>
              <Select
                labelId="training-select-label"
                value={selectValue}
                onChange={handleSelectChange}
              >
                <MenuItem value="option1">All</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2} sx={{ flexGrow: 1 }}>
        {tabValue === 0 && <MyCoursesTab />}
        {tabValue === 1 && <MyCommunitiesTab />}
      </Box>
    </Box>
  );
}

export default MyTraining;
