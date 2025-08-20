import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Typography, LinearProgress, Grid, TextField, InputAdornment, Accordion, AccordionSummary, AccordionDetails, List, ListItemAvatar, ListItemButton, ListItemText, Button } from '@mui/material';
import ArrowDown from '../../../assets/images/icons/ArrowDown'; 
import Search from '../../../assets/images/icons/Search';
import Lessons from '../../../assets/images/icons/Lessons';
import Clock from '../../../assets/images/icons/Clock';
import LessonDone from '../../../assets/images/icons/LessonDone';
import LessonProgress from '../../../assets/images/icons/LessonProgress';
import SurveyIcon from '../../../assets/images/icons/LessonSurvey';
import LessonQuiz from '../../../assets/images/icons/LessonQuiz';
import VideoIcon from '../../../assets/images/icons/VideoIcon';
import InfoIcon from '../../../assets/images/icons/Info';
import LessonVideo from './LessonVideo';
import LessonQuizComp from './LessonQuiz';
import LessonSurvey from './LessonSurvey';

function Course() {
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState("intro");

  // Map lesson keys to components
  const lessonComponents = {
    intro: LessonVideo,
    instructor: LessonVideo,
    steps: LessonVideo,
    community: LessonVideo,
    survey: LessonSurvey,
    quiz: LessonQuizComp,
  };

  const SelectedComponent = lessonComponents[selectedLesson];

  return (
    <>
      <Box className='course-head-wrapper'>
        <Stack className='course-heading'>
          <Button startIcon={<ArrowDown />} onClick={() => navigate('/training')}>
            Go to Dashboard
          </Button>
          <Typography variant="h4" color="initial">Residential Investment property specialist</Typography>
          <Box className='icon-wrapper'>
            <Typography variant="body1" className='text-xl'>
                10%
            </Typography>
            <LinearProgress variant="determinate" className='course-progressbar' value={10} />
          </Box>
        </Stack>
      </Box>

      <Grid container className='course-topics' spacing={{xs: 1, md: 2, xl: 3}}>
        {/* Left Side: Lessons */}
        <Grid px={{xl: 1}} size={{ xs: 12, md: 6, lg: 4}}>
          <TextField
            className='input-ui'
            label="Outlined"
            placeholder="Search by lesson title"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <Accordion defaultExpanded className='course-main'>
            <AccordionSummary
              expandIcon={<Box className="icon-expand"><ArrowDown /></Box>}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
              className='course-list-heading'
            >
              <Typography variant='h5'>Why Real Estate Investors Are the Key to Predictable Growth</Typography>
              <Box className='course-overview'>
                <Box className='icon-wrapper course-lessons'>
                  <Lessons />
                  <Typography gutterBottom variant="body2" className='text-xl'>
                    4 Chapters
                  </Typography>
                </Box>
                <Box className='icon-wrapper course-time'>
                  <Clock />
                  <Typography gutterBottom variant="body2" className='text-xl'>
                    1 h 40 min
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>

            <AccordionDetails className='course-detail'>
              <List className='course-list-inner'>
                <ListItemButton className='course-btn' onClick={() => setSelectedLesson("intro")} selected={selectedLesson === "intro"}>
                  <ListItemAvatar className='course-btn-icon'><LessonDone /></ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6" component="span" fontWeight="bold">Course Introduction</Typography>}
                    secondary={<Box className='icon-wrapper' component="span"><VideoIcon /><Typography variant="body2" component="span">20 min</Typography></Box>}
                  />
                </ListItemButton>

                <ListItemButton className='course-btn' onClick={() => setSelectedLesson("instructor")} selected={selectedLesson === "instructor"}>
                  <ListItemAvatar className='course-btn-icon'><LessonDone /></ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6" component="span" fontWeight="bold">Meet Your Instructor</Typography>}
                    secondary={<Box className='icon-wrapper' component="span"><VideoIcon /><Typography variant="body2" component="span">20 min</Typography></Box>}
                  />
                </ListItemButton>

                <ListItemButton className='course-btn' onClick={() => setSelectedLesson("steps")} selected={selectedLesson === "steps"}>
                  <ListItemAvatar className='course-btn-icon'><LessonDone /></ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6" component="span" fontWeight="bold">What You'll Achieve - Next Steps</Typography>}
                    secondary={<Box className='icon-wrapper' component="span"><VideoIcon /><Typography variant="body2" component="span">20 min</Typography></Box>}
                  />
                </ListItemButton>

                <ListItemButton className='course-btn' onClick={() => setSelectedLesson("community")} selected={selectedLesson === "community"}>
                  <ListItemAvatar className='course-btn-icon'><LessonProgress /></ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6" component="span" fontWeight="bold">Join the Playbook Community</Typography>}
                    secondary={<Box className='icon-wrapper' component="span"><VideoIcon /><Typography variant="body2" component="span">20 min</Typography></Box>}
                  />
                </ListItemButton>

                <ListItemButton className='course-btn' onClick={() => setSelectedLesson("survey")} selected={selectedLesson === "survey"}>
                  <ListItemAvatar className='course-btn-icon'><SurveyIcon /></ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6" component="span" fontWeight="bold">Survey - Discovering Your Brand DNA</Typography>}
                    secondary={<Box className='icon-wrapper' component="span"><InfoIcon /><Typography variant="body2" component="span">4 Questions</Typography></Box>}
                  />
                </ListItemButton>

                <ListItemButton className='course-btn' onClick={() => setSelectedLesson("quiz")} selected={selectedLesson === "quiz"}>
                  <ListItemAvatar className='course-btn-icon'><LessonQuiz /></ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6" component="span" fontWeight="bold">Quiz - Introduction</Typography>}
                    secondary={<Box className='icon-wrapper' component="span"><InfoIcon /><Typography variant="body2" component="span">2 Questions</Typography></Box>}
                  />
                </ListItemButton>
              </List>
            </AccordionDetails> 
          </Accordion>
        </Grid>

        {/* Right Side: Main Content */}
          {SelectedComponent ? <SelectedComponent /> : <Typography>Select a lesson to begin.</Typography>}
      </Grid>
    </>
  );
}

export default Course;
