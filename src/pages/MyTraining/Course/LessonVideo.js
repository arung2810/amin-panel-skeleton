import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardActions, Button } from '@mui/material';
import ArrowDown from '../../../assets/images/icons/ArrowDown'; 
import PlayArrow from '../../../assets/images/icons/PlayArrow';
import CourseImage from '../../../assets/images/CourseImage.jpg';
import Communities from '../../../assets/images/communities.jpg';

// ⬇️ Example placeholder components for lessons
export default function LessonVideo () {
  return (
  <Grid container className='course-main-content course-video-content' size={{ xs:12, sm:12, md:12, lg:8}} spacing={{xs: 1, md: 2, xl: 3}}>
    <Grid size={{xs: 12, md: 8, lg: 8, xl: 9}}>
      <Box className='image-wrapper'>
        <img src={CourseImage} alt='course-image' />
        <Box className='image-overlay'>
          <Box className='play-button'>
            <PlayArrow />
          </Box>
        </Box>
      </Box>
      <Typography variant="body1" marginBlock={2} color="initial">Learn how to pass data between components using props and manage component state using the useState hook. We'll build interactive components and handle user input.</Typography>
      <Typography variant="body1" marginBlock={2} color="initial">Learn how to pass data between components using props and manage component state using the useState hook. We'll build interactive components and handle user input.</Typography>
      <Typography variant="body1" marginBlock={2} color="initial">Learn how to pass data between components using props and manage component state using the useState hook. We'll build interactive components and handle user input. Learn how to pass data between components using props and manage component state using the useState hook. We'll build interactive components and handle user input.</Typography>
    </Grid>
    <Grid size={{xs:12, sm: 6, md: 4, lg: 4, xl: 3}}>
        <Card className='course-community'>
          <Box className='image-wrapper'>
            <CardMedia
            component="img"
            image={Communities}
            />
            <Box className='image-overlay'></Box>
          </Box>
          <Typography variant="body2" color="initial">Join the conversation in the community. Broker’s playbook community.</Typography>
          <CardActions>
            <Button endIcon={<Box className="icon-forward"><ArrowDown /></Box>}>
              Go to Community
            </Button>
          </CardActions>
        </Card>
    </Grid>
  </Grid>
  );
}