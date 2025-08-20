import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Stack, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import InfoIcon from '../../../assets/images/icons/Info';
import ClickIcon from '../../../assets/images/icons/ClickIcon';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import QuizImage from '../../../assets/images/QuizImage.png';

export default function LessonQuiz() {

  return (
    <Grid container className="course-main-content course-quiz" size={{ xs:12, sm:12, md:12, lg:8}} spacing={{xs: 1, md: 2, xl: 3}}>
        <Grid size={{xs: 12}} className="quiz-content">
          <Stack alignItems="center">
            <Typography variant="h4">Quiz - Introduction</Typography>
            <Box className="icon-wrapper">
              <InfoIcon />
              <Typography variant="body1" className="text-xl">2 Questions</Typography>
            </Box>
            <img src={QuizImage} alt="QuizImage" />
            <Button 
              variant="contained" 
              endIcon={<ClickIcon />} 
            >
              Start Quiz
            </Button>
          </Stack>
        </Grid>
    </Grid>
  );
}
