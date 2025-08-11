import React from 'react';
import { Box, Button, Container, Grid, Stack } from '@mui/material';

import SiteLogo from '../../assets/images/logo.png';
import AuthSlider from '../../components/common/AuthSlider';

function Authentication() {
  return (
    <>
      <Box className='authentication-wrapper'>

        <Box className='top-right-vector'></Box>
        <Box className='top-right-object'></Box>
        <Box className='bottom-right-object'></Box>

        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }} className='authentication-left'>
              <Stack gap={3} alignItems='center' justifyContent='center'>
                <Box className='logo-box'>
                  <img src={SiteLogo} alt={SiteLogo} />  
                </Box>

                <Box className='auth-slider-wrapper'>
                  <AuthSlider />
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }} className='authentication-right'>
              <Button>
asdasd
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Authentication;
