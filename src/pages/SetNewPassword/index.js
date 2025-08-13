import React from 'react';
import { Box, Button, Container, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SiteLogo from '../../assets/images/logo.png';

import AuthSlider from '../../components/common/AuthSlider';
import AuthObject from '../../assets/images/icons/AuthObject';
import CopyRights from '../../components/common/CopyRights';
import CircleLeftArrow from '../../assets/images/icons/CircleLeftArrow';
import Lock from '../../assets/images/icons/Lock';
import Eye from '../../assets/images/icons/Eye';

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
                  <Typography variant='h1' component="h1" className='auth-title text-center'>Set a new password</Typography>
                  <Typography variant='body1' component="p" className='auth-para text-center'>Please create a password for your account.</Typography>
                </Stack>

                <Stack gap={3} mt={3} mb={1}>
                  <Stack gap={2} mb={3} mt={3}>
                  
                    <Box className='field-wrapper'>
                      <Typography variant="body1" component="label" className="field-label">Confirm Password</Typography>
                      <TextField className='input-ui' label="Outlined" placeholder="Enter Confirm Password" fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                                <Eye />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <Box className='field-wrapper'>
                      <Typography variant="body1" component="label" className="field-label">Password</Typography>
                      <TextField className='input-ui' label="Outlined" placeholder="Enter password" fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                                <Eye />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Stack>
                  <Button className='btn primary-btn' fullWidth onClick={() => navigate('/successfully-password-reset')}>
                    Submit
                  </Button>
                </Stack>
                <Box className='text-center' mt={3}>
                  <Button className='btn text-btn' startIcon={<CircleLeftArrow />} onClick={() => navigate('/verification-code')}>Back</Button>
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
