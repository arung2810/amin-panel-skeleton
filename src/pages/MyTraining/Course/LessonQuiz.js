import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button, Stack, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel, LinearProgress } from '@mui/material';
import InfoIcon from '../../../assets/images/icons/QuestionsIcon';
import ClickIcon from '../../../assets/images/icons/ClickIcon';
import SubmitIcon from '../../../assets/images/icons/SubmitIcon';
import QuizImage from '../../../assets/images/QuizImage.png';
import FailIcon from '../../../assets/images/icons/FailIcon';
import ReloadIcon from '../../../assets/images/icons/ReloadIcon';
import ContinueIcon from '../../../assets/images/icons/ContinueIcon';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import LessonDone from '../../../assets/images/icons/LessonDone';

const quizQuestions = [
  {
    id: 1,
    question: 'Q1: What is the main focus of this course?',
    options: [
      { value: 'sales', label: 'Commercial property sales' },
      { value: 'investment', label: 'Residential investment properties' },
      { value: 'estate', label: 'Real estate law' },
      { value: 'marketing', label: 'Luxury property marketing' },
    ],
    button: { label: 'Next', icon: <ArrowRight /> }
  },
  {
    id: 2,
    question: 'Q2: What is a key factor in achieving predictable growth?',
    options: [
      { value: 'promotions', label: 'Seasonal promotions' },
      { value: 'acquisition', label: 'Consistent client acquisition' },
      { value: 'fluctuations', label: 'Price fluctuations' },
      { value: 'budget', label: 'Reducing marketing budget' },
    ],
    button: { label: 'Submit Quiz', icon: <SubmitIcon /> }
  }
];

export default function LessonQuiz() {
  const navigate = useNavigate();
  const handleGoToDashboard = () => navigate('/training');
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleRetake = () => setStep(1);

  return (
    <Grid container className="course-main-content course-quiz" size={{ xs:12, md:7, lg:8}} spacing={{xs: 1, md: 2, xl: 3}}>
      {/* Intro */}
      {step === 0 && (
        <Grid size={{ xs:12}} className="main-wrapper quiz-content">
          <Stack alignItems="center">
            <Typography variant="h4">Quiz - Introduction</Typography>
            <Box className="icon-wrapper">
              <InfoIcon />
              <Typography variant="body1" className="text-xl">2 Questions</Typography>
            </Box>
            <img src={QuizImage} alt="QuizImage" />
            <Button variant="contained" endIcon={<ClickIcon />} onClick={handleNext}>
              Start Quiz
            </Button>
          </Stack>
        </Grid>
      )}

      {/* Dynamic Questions */}
      {(step === 1 || step === 2) && (
        <Grid size={{ xs:12}} className="main-wrapper quiz-content">
          <Stack className="quiz-stack">
            <Box className="quiz-box">
              <FormControl className="quiz-form">
                <FormLabel>{quizQuestions[step - 1].question}</FormLabel>
                <RadioGroup>
                  {quizQuestions[step - 1].options.map((opt) => (
                    <FormControlLabel
                      key={opt.value}
                      value={opt.value}
                      control={<Radio />}
                      label={opt.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              endIcon={quizQuestions[step - 1].button.icon}
              onClick={handleNext}
            >
              {quizQuestions[step - 1].button.label}
            </Button>
          </Stack>
        </Grid>
      )}

      {/* Results */}
      {step === 3 && (
        <Grid size={{ xs:12}} className="main-wrapper quiz-content">
          <Stack className="quiz-result">
            <Box className="quiz-result-head">
              <Typography variant="h4">Quiz Results</Typography>
              <Box className="quiz-wrapper">
                <Typography variant="h4">50%</Typography>
                <Box className="quiz-result-pill">
                  <FailIcon />
                  <Typography variant="body1">Quiz Failed</Typography>
                </Box>
              </Box>
              <Box className="quiz-result-progress">
                <Typography variant="body1" className="text-xl">
                  You got 1 out of 2 questions correct
                </Typography>
                <LinearProgress variant="determinate" className="course-progressbar" value={50} />
              </Box>
            </Box>
            <Box className="quiz-answers">
              <Box className="quiz-qustion-block">
                <Box className="quiz-option-head">
                  <Typography variant="h5">Q1: What is the main focus of this course?</Typography>
                  <LessonDone />
                </Box>
                <Box className="quiz-option"><Typography variant="body1" className="text-xl">Commercial property sales</Typography></Box>
                <Box className="quiz-option quiz-option-correct"><Typography variant="body1" className="text-xl">Residential investment properties</Typography></Box>
                <Box className="quiz-option"><Typography variant="body1" className="text-xl">Real estate law</Typography></Box>
                <Box className="quiz-option"><Typography variant="body1" className="text-xl">Luxury property marketing</Typography></Box>
              </Box>
              <Box className="quiz-qustion-block">
                <Box className="quiz-option-head">
                  <Typography variant="h5">Q2: What is a key factor in achieving predictable growth?</Typography>
                  <FailIcon />
                </Box>
                <Box className="quiz-option quiz-option-wrong"><Typography variant="body1" className="text-xl">Seasonal promotions</Typography></Box>
                <Box className="quiz-option quiz-option-correct"><Typography variant="body1" className="text-xl">Consistent client acquisition</Typography></Box>
                <Box className="quiz-option"><Typography variant="body1" className="text-xl">Price fluctuations</Typography></Box>
                <Box className="quiz-option"><Typography variant="body1" className="text-xl">Reducing marketing budget</Typography></Box>
              </Box>
            </Box>
            <Box className="quiz-action-buttons">
              <Button variant="outlined" endIcon={<ReloadIcon />} onClick={handleRetake}>Retake Quiz</Button>
              <Button variant="contained" endIcon={<ContinueIcon />} onClick={handleGoToDashboard}>Continue Learning</Button>
            </Box>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}
