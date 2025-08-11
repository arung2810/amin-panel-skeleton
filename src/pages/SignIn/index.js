import React from 'react';
import { Box, Button, Container, Divider, FormControlLabel, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import CheckboxField from '../../components/common/CheckboxField';
import { useNavigate } from "react-router-dom";
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

function SignIn() {

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
                  <Typography variant='h1' component="h1" className='auth-title text-center'>Sing In</Typography>
                  <Typography variant='body1' component="p" className='auth-para text-center'>Enter your credentials to access to your account</Typography>
                </Stack>
                <Stack gap={2} mb={3} mt={3}>
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
                    <Stack className='remember-forgot' direction='row' justifyContent='space-between' alignItems='center'>
                      <FormControlLabel  control={<CheckboxField />} label="Remember me"  className="checkbox-label" />
                      <Typography variant='body2' component="span" className='text-link' onClick={() => navigate('/forgot-password')}>Forgot Password?</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Button className='btn primary-btn' fullWidth >
                  Sign In
                </Button>
                <Typography variant='body1' component="p" className='already-account' mt={2}>Don’t have an account yet? <Typography variant='body2' component="span" className='text-link' onClick={() => navigate('/sign-up')}>Sign up</Typography></Typography>
                
                <Box className='or-divider'>
                    <Divider />
                    <Typography variant='body2' component="span" className='or-text'>Or sign in with</Typography>
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

export default SignIn;
