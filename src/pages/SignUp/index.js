import React from 'react';
import { Box, Button, Container, Divider, FormControlLabel, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import CheckboxField from '../../components/common/CheckboxField';
import SiteLogo from '../../assets/images/logo.png';

import AuthSlider from '../../components/common/AuthSlider';
import AuthObject from '../../assets/images/icons/AuthObject';
import CopyRights from '../../components/common/CopyRights';
import Mail from '../../assets/images/icons/Mail';
import Lock from '../../assets/images/icons/Lock';
import Eye from '../../assets/images/icons/Eye';
import LinkedIn from '../../assets/images/icons/LinkedIn';
import Facebook from '../../assets/images/icons/Facebook';
import Google from '../../assets/images/icons/Google';
import Apple from '../../assets/images/icons/Apple';
import User from '../../assets/images/icons/User';

function SignUp() {
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
                  <Typography variant='h1' component="h1" className='auth-title text-center'>Sing Up</Typography>
                  <Typography variant='body1' component="p" className='auth-para text-center'>Let’s get you all set up so you can access your personal account.</Typography>
                </Stack>

                <Grid container spacing={2} mt={3} mb={3}>
                  <Grid size={{ xs: 12, sm:6, md: 6, lg:6 }}>
                    <Box className='field-wrapper'>
                      <Typography variant="body1" component="label" className="field-label">First Name</Typography>
                      <TextField className='input-ui' label="Outlined" placeholder="Enter first name" fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                                <User />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm:6, md: 6, lg:6 }}>
                    <Box className='field-wrapper'>
                      <Typography variant="body1" component="label" className="field-label">Last Name</Typography>
                      <TextField className='input-ui' label="Outlined" placeholder="Enter last name" fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                                 <User />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm:12, md: 12, lg:12 }}>
                    <Box className='field-wrapper'>
                      <Typography variant="body1" component="label" className="field-label">Email</Typography>
                      <TextField className='input-ui' label="Outlined" placeholder="Enter email" fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                                <Mail />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm:12, md: 12, lg:12 }}>
                    <Stack gap={1}>
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
                      <FormControlLabel  control={<CheckboxField />} label="Remember me"  className="checkbox-label" />
                    </Stack>
                  </Grid>
                </Grid>
                <Button className='btn primary-btn' fullWidth >
                  Sign Up
                </Button>
                <Typography variant='body1' component="p" className='already-account' mt={2}>Already have an account? <Typography variant='body2' component="span" className='text-link'  onClick={() => navigate('/sign-in')}>Sign In</Typography></Typography>
                
                <Box className='or-divider'>
                    <Divider />
                    <Typography variant='body2' component="span" className='or-text'>Or sign up with</Typography>
                </Box>
                <Stack className='login-platform' direction='row' justifyContent='space-between' alignItems='center' gap={2} mt={2}>
                  <Box className='platform-btn'>
                    <LinkedIn/>
                  </Box>
                  <Box className='platform-btn'>
                    <Facebook/>
                  </Box>
                  <Box className='platform-btn'>
                    <Google/>
                  </Box>
                  <Box className='platform-btn'>
                    <Apple/>
                  </Box>
                </Stack>
              </Box>              
              <CopyRights/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SignUp;
