import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, LinearProgress } from '@mui/material';
import CourseImage from '../../assets/images/CourseImage.jpg';
import Lessons from '../../assets/images/icons/Lessons';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import PlayArrow from '../../assets/images/icons/PlayArrow';

export default function MyCoursesTab() {
  const navigate = useNavigate();
  return (
    <Grid container className='my-courses' spacing={{xs: 1, md: 2, xl: 3}}>
      <Grid  size={{xs: 12, sm: 6, lg: 4, xl: 3}}>
        <Card className='course-card'>
          <Box className='course-card-media'>
            <CardMedia
              component="img"
              image={CourseImage}
            />
            <Box className='course-card-media-overlay'>
              <Box className='play-button'>
                <PlayArrow />
              </Box>
            </Box>
          </Box>
          <CardContent className='course-content'>
            <Typography gutterBottom variant="h5">
              Residential Investment property specialist
            </Typography>
            <Box className='course-lessons'>
              <Lessons />
              <Typography gutterBottom variant="body1" className='text-xl'>
              16 Lessons
            </Typography>
            </Box>
           <Box className='course-progress'>
              <Typography gutterBottom variant="body1" className='text-xl'>
              10%
            </Typography>
           <LinearProgress variant="determinate" className='course-progressbar' value={10} />
           </Box>
          </CardContent>
          <CardActions className='card-action'>
            <Button className='overview-btn' endIcon={<ArrowRight />}>
              See Overview
            </Button>
            <Button className='course-btn' variant="contained" endIcon={<PlayArrow />} onClick={() => navigate('/training/course')}>
              Start Course
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{xs: 12, sm: 6, lg: 4, xl: 3}}>
        <Card className='course-card'>
          <Box className='course-card-media'>
            <CardMedia
              component="img"
              image={CourseImage}
            />
            <Box className='course-card-media-overlay'>
              <Box className='play-button'>
                <PlayArrow />
              </Box>
            </Box>
          </Box>
          <CardContent className='course-content'>
            <Typography gutterBottom variant="h5">
              Residential Investment property specialist
            </Typography>
            <Box className='course-lessons'>
              <Lessons />
              <Typography gutterBottom variant="body1" className='text-xl'>
              16 Lessons
            </Typography>
            </Box>
           <Box className='course-progress'>
              <Typography gutterBottom variant="body1" className='text-xl'>
              10%
            </Typography>
           <LinearProgress variant="determinate" className='course-progressbar' value={10} />
           </Box>
          </CardContent>
          <CardActions className='card-action'>
            <Button className='overview-btn' endIcon={<ArrowRight />}>
              See Overview
            </Button>
            <Button className='course-btn' variant="contained" endIcon={<PlayArrow />}>
              Start Course
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{xs: 12, sm: 6, lg: 4, xl: 3}}>
        <Card className='course-card'>
          <Box className='course-card-media'>
            <CardMedia
              component="img"
              image={CourseImage}
            />
            <Box className='course-card-media-overlay'>
              <Box className='play-button'>
                <PlayArrow />
              </Box>
            </Box>
          </Box>
          <CardContent className='course-content'>
            <Typography gutterBottom variant="h5">
              Residential Investment property specialist
            </Typography>
            <Box className='course-lessons'>
              <Lessons />
              <Typography gutterBottom variant="body1" className='text-xl'>
              16 Lessons
            </Typography>
            </Box>
           <Box className='course-progress'>
              <Typography gutterBottom variant="body1" className='text-xl'>
              10%
            </Typography>
           <LinearProgress variant="determinate" className='course-progressbar' value={10} />
           </Box>
          </CardContent>
          <CardActions className='card-action'>
            <Button className='overview-btn' endIcon={<ArrowRight />}>
              See Overview
            </Button>
            <Button className='course-btn' variant="contained" endIcon={<PlayArrow />}>
              Start Course
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{xs: 12, sm: 6, lg: 4, xl: 3}}>
        <Card className='course-card'>
          <Box className='course-card-media'>
            <CardMedia
              component="img"
              image={CourseImage}
            />
            <Box className='course-card-media-overlay'>
              <Box className='play-button'>
                <PlayArrow />
              </Box>
            </Box>
          </Box>
          <CardContent className='course-content'>
            <Typography gutterBottom variant="h5">
              Residential Investment property specialist
            </Typography>
            <Box className='course-lessons'>
              <Lessons />
              <Typography gutterBottom variant="body1" className='text-xl'>
              16 Lessons
            </Typography>
            </Box>
           <Box className='course-progress'>
              <Typography gutterBottom variant="body1" className='text-xl'>
              10%
            </Typography>
           <LinearProgress variant="determinate" className='course-progressbar' value={10} />
           </Box>
          </CardContent>
          <CardActions className='card-action'>
            <Button className='overview-btn' endIcon={<ArrowRight />}>
              See Overview
            </Button>
            <Button className='course-btn' variant="contained" endIcon={<PlayArrow />}>
              Start Course
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
