import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Typography, LinearProgress, Grid, TextField, InputAdornment, Button, Stepper, Step, StepLabel, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';
import ArrowDown from '../../../assets/images/icons/ArrowDown'; 
import Search from '../../../assets/images/icons/Search';
import Lessons from '../../../assets/images/icons/Lessons';
import Clock from '../../../assets/images/icons/Clock';
import LessonDone from '../../../assets/images/icons/LessonDone';
import LessonProgress from '../../../assets/images/icons/LessonProgress';
import SurveyIcon from '../../../assets/images/icons/LessonSurvey';
import LessonQuiz from '../../../assets/images/icons/LessonQuiz';
import VideoIcon from '../../../assets/images/icons/VideoIcon';
import InfoIcon from '../../../assets/images/icons/QuestionsIcon';
import LessonVideoIcon from '../../../assets/images/icons/LessonVideo';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import LessonVideo from './LessonVideo';
import LessonQuizComp from './LessonQuiz';
import LessonSurvey from './LessonSurvey';


function Course() {
  const navigate = useNavigate();
  // Define the ordered steps/lessons
  const steps = [
    {
      key: 'intro',
      label: 'Course Introduction',
      icon: <VideoIcon />, time: '20 min', component: LessonVideo
    },
    {
      key: 'instructor',
      label: 'Meet Your Instructor',
      icon: <VideoIcon />, time: '20 min', component: LessonVideo
    },
    {
      key: 'steps',
      label: `What You'll Achieve - Next Steps`,
      icon: <VideoIcon />, time: '20 min', component: LessonVideo
    },
    {
      key: 'community',
      label: 'Join the Playbook Community',
      icon: <VideoIcon />, time: '20 min', component: LessonVideo
    },
    {
      key: 'survey',
      label: 'Survey - Discovering Your Brand DNA',
      icon: <InfoIcon />, time: '4 Questions', component: LessonSurvey
    },
    {
      key: 'quiz',
      label: 'Quiz - Introduction',
      icon: <InfoIcon />, time: '2 Questions', component: LessonQuizComp
    },
  ];
  

  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState([]); // array of completed step indices

  const handleNext = () => {
    setCompleted(prev => prev.includes(currentStep) ? prev : [...prev, currentStep]);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGoToQuiz = () => {
    setCompleted(prev => prev.includes(currentStep) ? prev : [...prev, currentStep]);
    const quizIdx = steps.findIndex(s => s.key === 'quiz');
    if (quizIdx !== -1) setCurrentStep(quizIdx);
  };

  const handleGoToDashboard = () => navigate('/training');

  // Progress calculation
  const progress = Math.round(((completed.length) / steps.length) * 100);

  const CurrentComponent = steps[currentStep].component;

  // Custom icon logic for Stepper
  const getStepIcon = (idx, step) => {
    if (completed.includes(idx)) return <LessonDone />;
    if (idx === currentStep) return <LessonProgress />;
    if (step.key === 'survey') return <SurveyIcon />;
    if (step.key === 'quiz') return <LessonQuiz />;
    return <LessonVideoIcon />;
  };

  return (
    <>
      <Box className='course-head-wrapper'>
        <Stack className='course-heading'>
          <Button startIcon={<ArrowDown />} onClick={handleGoToDashboard}>
            Go to Dashboard
          </Button>
          <Typography variant="h4" color="initial">Residential Investment property specialist</Typography>
          <Box className='icon-wrapper'>
            <Typography variant="body1" className='text-xl'>
                {progress}%
            </Typography>
            <LinearProgress variant="determinate" className='course-progressbar' value={progress} />
          </Box>
        </Stack>
      </Box>

      <Grid container className='course-topics' spacing={{xs: 1, md: 2, xl: 3}}>
        {/* Left Side: Steps/Progress */}
        <Grid px={{xl: 1}} size={{ xs: 12, md: 5, lg: 4}}>
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
                    {steps.length} Chapters
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
              <Stepper activeStep={currentStep} orientation="vertical" className="course-stepper" connector={null}>
                {steps.map((step, idx) => (
                  <Step key={step.key} completed={completed.includes(idx)} className={`course-step${idx === currentStep ? ' Mui-active' : ''}`}>
                    <StepLabel
                      className='course-steplabel'
                      icon={getStepIcon(idx, step)}
                      optional={
                        <Box className='icon-wrapper' component="span">
                          {step.icon}
                          <Typography variant="body2" component="span" ml={1}>{step.time}</Typography>
                        </Box>
                    }>
                    <Typography variant="h6" fontWeight="bold">{step.label}</Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Right Side: Only show current step */}
        
        {CurrentComponent
          ? currentStep === steps.findIndex(s => s.key === 'survey')
            ? <LessonSurvey onNextChapter={handleGoToQuiz} />
            : <CurrentComponent />
          : <Typography>Select a lesson to begin.</Typography>
        }
        <Grid size={{ xs: 12}}>
         {!['survey', 'quiz'].includes(steps[currentStep].key) && (
          <Button variant="contained" onClick={handleNext} className='next-btn' endIcon={<ArrowRight />}>
            Next
          </Button>
        )}
        </Grid>
      </Grid>
    </>
  );
}

export default Course;
