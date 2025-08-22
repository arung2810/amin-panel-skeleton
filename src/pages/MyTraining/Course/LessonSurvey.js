import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Stack, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel, TextField } from '@mui/material';
import InfoIcon from '../../../assets/images/icons/QuestionsIcon';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import SubmitIcon from '../../../assets/images/icons/SubmitIcon';
import AppreciationImg from '../../../assets/images/Appreciation-bro.png';

const steps = [
  {
    type: 'radio',
    title: 'Discovering Your Brand DNA',
    subtitle: '4 Questions',
    question: 'Q1: What motivated you to enter this profession?',
    options: [
      { value: 'succeed', label: 'I wanted to help others succeed' },
      { value: 'solving', label: 'I enjoy creative problem-solving' },
      { value: 'experience', label: 'I was inspired by a personal experience' },
      { value: 'other', label: 'Other' }
    ],
    button: { label: 'Next', icon: <ArrowRight /> }
  },
  {
    type: 'text',
    question: 'Q2: What’s a personal hobby or passion that makes you unique?',
    placeholder: 'Describe a hobby…',
    button: { label: 'Next', icon: <ArrowRight /> }
  },
  {
    type: 'text',
    question: 'Q3: What’s a life experience that’s shaped how you serve your clients?',
    placeholder: 'Write about your experience…',
    button: { label: 'Next', icon: <ArrowRight /> }
  },
  {
    type: 'radio',
    question: 'Q4: What do your friends say is ‘so you’?',
    options: [
      { value: 'encouraging', label: 'Always positive and encouraging' },
      { value: 'creative', label: 'The creative one' },
      { value: 'solver', label: 'Problem solver' },
      { value: 'other', label: 'Other' }
    ],
    button: { label: 'Submit', icon: <SubmitIcon /> }
  },
  {
    type: 'thankyou',
    button: { label: 'Next Chapter', icon: <ArrowRight /> }
  }
];

export default function LessonSurvey({ onNextChapter }) {
  const [step, setStep] = useState(0);
  const current = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else if (onNextChapter) onNextChapter();
  };

  const renderContent = () => {
    if (current.type === 'radio') {
      return (
        <FormControl className="survey-form">
          {current.title && (
            <Box className="heading-wrapper">
              <Typography variant="h4">{current.title}</Typography>
              <Box className="icon-wrapper">
                <InfoIcon />
                <Typography variant="body1" className="text-xl">{current.subtitle}</Typography>
              </Box>
            </Box>
          )}
          <FormLabel>{current.question}</FormLabel>
          <RadioGroup defaultValue={current.options[0]?.value}>
            {current.options.map(opt => (
              <FormControlLabel key={opt.value} value={opt.value} control={<Radio />} label={opt.label} />
            ))}
          </RadioGroup>
        </FormControl>
      );
    }

    if (current.type === 'text') {
      return (
        <FormControl className="survey-form">
          <FormLabel>{current.question}</FormLabel>
          <TextField multiline rows={4} placeholder={current.placeholder} />
        </FormControl>
      );
    }

    if (current.type === 'thankyou') {
      return (
        <>
          <img src={AppreciationImg} alt='SurveyComplete' />
          <Typography variant="h4">Thank you for completing!</Typography>
          <Typography variant="h5">Your responses saved.</Typography>
        </>
      );
    }
  };

  return (
    <Grid container className="course-main-content course-survey" size={{ xs:12, md:7, lg:8}} spacing={{xs: 1, md: 2, xl: 3}}>
      <Grid size={{xs:12}} className={`main-wrapper survey-content step-${step + 1}`}>
        <Stack className="survey-stack">
            <Box className="survey-box">
                {renderContent()}
            </Box>
          <Button variant="contained" endIcon={current.button.icon} onClick={handleNext}>
            {current.button.label}
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
