import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Avatar, AvatarGroup } from '@mui/material';
import Communities from '../../assets/images/communities.jpg';
import Post from '../../assets/images/icons/Post';
import InfoIcon from '../../assets/images/icons/InfoIcon';
import LockOpen from '../../assets/images/icons/LockOpen';
import Join from '../../assets/images/icons/Join';
import LockJoin from '../../assets/images/icons/LockJoin';
import Ross from '../../assets/images/ross.png';
import Monica from '../../assets/images/monica.png';
import Rachel from '../../assets/images/rachel.png';

function MyCommunitiesTab() {
  return (
    <Grid container className='my-community' spacing={{xs: 1, md: 2, xl: 3}}>
    <Grid size={{xs: 12, sm: 6, lg: 4, xl: 3}}>
      <Card className='community-card'>
        <Box className='community-card-media'>
          <CardMedia
            component="img"
            image={Communities}
          />
          <Box className='community-card-media-overlay' />
        </Box>
        <CardContent className='community-content'>
          <Typography gutterBottom variant="h5">
            Broker’s playbook community
          </Typography>
          <Typography gutterBottom variant="body1">
            Broker’s playbook community is your free. all in one hub to learn, connect...
          </Typography>
          <Box className='community-peoples'>
            <Box className='community-post'>
              <Post />
              <Typography gutterBottom variant="body1" className='text-xl'>
                1 Post
              </Typography>
            </Box>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={Ross} />
              <Avatar alt="Cindy Baker" src={Rachel} />
              <Avatar alt="Travis Howard" src={Monica} />
              <Avatar alt="Cindy Baker" src={Rachel} />
              <Avatar alt="Travis Howard" src={Monica} />
              <Avatar alt="Cindy Baker" src={Rachel} />
              <Avatar alt="Travis Howard" src={Monica} />
              <Avatar alt="Cindy Baker" src={Rachel} />
            </AvatarGroup>
          </Box>
        </CardContent>
        <CardActions className='community-open'>
          <LockOpen />
          <Button className='community-btn' variant="contained" endIcon={<InfoIcon />}>
          Open Community
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid size={{xs: 12, sm: 6, lg: 4, xl: 3}}>
      <Card className='community-card'>
        <Box className='community-card-media'>
          <CardMedia
            component="img"
            image={Communities}
          />
          <Box className='community-card-media-overlay' />
        </Box>
        <CardContent className='community-content'>
          <Typography gutterBottom variant="h5">
            Broker’s playbook community
          </Typography>
          <Typography gutterBottom variant="body1">
            Broker’s playbook community is your free. all in one hub to learn, connect...
          </Typography>
          <Box className='community-peoples'>
            <Box className='community-post'>
              <Post />
              <Typography gutterBottom variant="body1" className='text-xl'>
                1 Post
              </Typography>
            </Box>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={Ross} />
              <Avatar alt="Cindy Baker" src={Rachel} />
              <Avatar alt="Travis Howard" src={Monica} />
              <Avatar alt="Cindy Baker" src={Rachel} />
              <Avatar alt="Travis Howard" src={Monica} />
              <Avatar alt="Cindy Baker" src={Rachel} />
              <Avatar alt="Travis Howard" src={Monica} />
              <Avatar alt="Cindy Baker" src={Rachel} />
            </AvatarGroup>
          </Box>
        </CardContent>
        <CardActions className='community-join'>
          <LockJoin />
          <Button className='community-btn' variant="contained" endIcon={<Join />}>
            Join Community
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
  );
}

export default MyCommunitiesTab;
