import React from 'react';
import { Box, Typography, Grid, Button, Stack, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import InfoIcon from '../../../assets/images/icons/Info';
import ArrowRight from '../../../assets/images/icons/ArrowRight';

export default function LessonSurvey() {
    return (
        <Grid container className="course-main-content course-quiz" size={{ xs:12, sm:12, md:12, lg:8}} spacing={{xs: 1, md: 2, xl: 3}}>
            <Grid size={{xs: 12}} className="quiz-content">
                <Stack className="quiz-stack">
                    <Box className="heading-wrapper">
                    <Typography variant="h4">Discovering Your Brand DNA</Typography>
                    <Box className="icon-wrapper">
                        <InfoIcon />
                        <Typography variant="body1" className="text-xl">4 Questions</Typography>
                    </Box>
                    </Box>
                    <FormControl className="quiz-form">
                    <FormLabel>Q1: What motivated you to enter this profession?</FormLabel>
                    <RadioGroup defaultValue="solving" name="radio-buttons-group">
                        <FormControlLabel value="succeed" control={<Radio />} label="I wanted to help others succeed" />
                        <FormControlLabel value="solving" control={<Radio />} label="I enjoy creative problem-solving" />
                        <FormControlLabel value="experience" control={<Radio />} label="I was inspired by a personal experience" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl>
                    <Button variant="contained" endIcon={<ArrowRight />}>
                    Next
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
}