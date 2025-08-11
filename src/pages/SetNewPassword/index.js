import React from 'react';
import { Box, Button, Container, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SiteLogo from '../../assets/images/logo.png';

import AuthSlider from '../../components/common/AuthSlider';
import AuthObject from '../../assets/images/icons/AuthObject';
import CopyRights from '../../components/common/CopyRights';
import Mail from '../../assets/images/icons/Mail';
import CircleLeftArrow from '../../assets/images/icons/CircleLeftArrow';

function SetNewPassword() {
  const navigate = useNavigate();
  return (
    <>
      <Box className='authentication-wrapper'>

        <Box className='top-right-vector'>
          <AuthObject/>
        </Box>
        <Box className='top-right-object'></Box>
        <Box className='bottom-right-object'></Box>

        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm:6, md: 6, lg:6 }} className='authentication-left'>
              <Stack gap={3} alignItems='center' justifyContent='center'>
                <Box className='logo-box'>
                  <img src={SiteLogo} alt={SiteLogo} />  
                </Box>

                <Box className='auth-slider-wrapper'>
                  <AuthSlider />
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm:6, md: 6, lg:6 }} className='authentication-right'>
              <Box className='auth-object'>
                <Stack gap={1}>
                  <Typography variant='h1' component="h1" className='auth-title text-center'>Enter a verification code</Typography>
                  <Typography variant='body1' component="p" className='auth-para text-center'>We emailed a security code to <span className='fw-600 text-primary'>john@gmail.com.</span> <br/> If you can't find it, check your spam folder.</Typography>
                </Stack>

                <Stack gap={3} mt={3} mb={1}>
                  <Stack gap={2} direction='row' className='field-wrapper opt-input-wrapper' justifyContent='space-between'>
                    <TextField className='otp-input' placeholder="-" fullWidth/>
                    <TextField className='otp-input' placeholder="-" fullWidth/>
                    <TextField className='otp-input' placeholder="-" fullWidth/>
                    <TextField className='otp-input' placeholder="-" fullWidth/>
                    <TextField className='otp-input' placeholder="-" fullWidth/>
                    <TextField className='otp-input' placeholder="-" fullWidth/>
                  </Stack>
                  <Button className='btn primary-btn' fullWidth onClick={() => navigate('/set-new-password')}>
                    Verify
                  </Button>
                </Stack>
                <Box className='text-center' mt={3}>
                  <Stack gap={1} alignItems='center' mb={3}>
                    <Typography variant='h6' component="h6" className='secondary-text fw-700 text-center'>00:58</Typography>
                    <Typography variant='body1' component="p" className='already-account text-center'>Still no code? <Typography variant='body2' component="span" className='text-link'>Resend code</Typography></Typography>
                  </Stack>
                  <Button className='btn text-btn' startIcon={<CircleLeftArrow />} onClick={() => navigate('/forgot-password')}>Back</Button>
                </Box>
              </Box>              
              <CopyRights/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SetNewPassword;
