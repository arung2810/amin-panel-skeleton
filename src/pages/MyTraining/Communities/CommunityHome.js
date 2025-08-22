import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Button, Typography, Grid, Avatar, AvatarGroup, FormControl, FormLabel, TextField, Stack, IconButton } from '@mui/material';
import Communities from '../../../assets/images/communities.jpg';
import CloseIcon from '../../../assets/images/icons/FailIcon';
import PlainIcon from '../../../assets/images/icons/PlainIcon';
import EmojiIcon from '../../../assets/images/icons/EmojiIcon';
import ImageIcon from '../../../assets/images/icons/ImageIcon';
import AttchIcon from '../../../assets/images/icons/AttchIcon';
import ThumbIcon from '../../../assets/images/icons/ThumbIcon';
import MessageIcon from '../../../assets/images/icons/MessageIcon';
import ShareIcon from '../../../assets/images/icons/ShareIcon';
import ReplyIcon from '../../../assets/images/icons/ReplyIcon';
import CamIcon from '../../../assets/images/icons/CamIcon';
import Ross from '../../../assets/images/ross.png';
import Monica from '../../../assets/images/monica.png';
import Rachel from '../../../assets/images/rachel.png';
import FailIcon from '../../../assets/images/icons/FailIcon';

function CommunityHome() {
  const [showReply, setShowReply] = React.useState(false);

  const handleReplyClick = () => {
    setShowReply((prev) => !prev); // toggle reply section
  };

  return (
    <Grid container className='my-community' spacing={{ xs: 1, md: 2, lg: '20px' }}>
      <Grid className='my-community-left'>
        {/* Community intro card */}
        <Card className='community-card-main'>
          <Box className='community-card-media'>
            <CardMedia component="img" image={Communities} />
            <Box className='community-card-media-overlay' />
            <Box className='close-icon'>
              <CloseIcon />
            </Box>
          </Box>
          <Typography gutterBottom variant="h5">
            Welcome to Broker’s Playbook Community
          </Typography>
          <Typography gutterBottom variant="body1">
            The Broker’s playbook community is your free, all-in-one hub to learn, connect, and grow as a real estate professional. Get expert tactics, live coaching, and proven tools—built by agents, for agents.
          </Typography>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src={Ross} />
            <Avatar alt="Cindy Baker" src={Rachel} />
            <Avatar alt="Travis Howard" src={Monica} />
            <Avatar alt="Cindy Baker" src={Rachel} />
            <Avatar alt="Remy Sharp" src={Ross} />
            <Avatar alt="Cindy Baker" src={Rachel} />
            <Avatar alt="Travis Howard" src={Monica} />
            <Avatar alt="Cindy Baker" src={Rachel} />
          </AvatarGroup>
        </Card>

        {/* Create Post */}
        <Card className='post create-post'>
          <Box className='post-wrapper create-post'>
            <Avatar aria-label="recipe">BP</Avatar>
            <Stack className='create-post-stack'>
              <FormControl className="survey-form">
                <FormLabel>Create New Post</FormLabel>
                <TextField multiline rows={4} placeholder='Share something with the community...' />
              </FormControl>
              <Box className='create-post-action'>
                <Box className='create-post-icons'>
                  <IconButton aria-label="Emoji"><EmojiIcon /></IconButton>
                  <IconButton aria-label="Image"><ImageIcon /></IconButton>
                  <IconButton aria-label="Attach"><AttchIcon /></IconButton>
                  <IconButton aria-label="Camera"><CamIcon /></IconButton>
                </Box>
                <Button className='community-btn' variant="contained" endIcon={<PlainIcon />}>
                  Post
                </Button>
              </Box>
            </Stack>
          </Box>
        </Card>

        {/* Post + Reply Section */}
        <Card className='post reply-post'>
          <Box className='post-wrapper posted-post'>
            <Avatar aria-label="recipe">SJ</Avatar>
            <Stack className='create-post-stack'>
              <FormLabel>Sarah Johnson</FormLabel>
              <Typography variant="h6">Sarah Johnson</Typography>
              <Typography variant="body1">
                Join a thriving network of brokers, agents, and investors who share insights, strategies, and success stories. Whether you’re closing your first deal or scaling your business, the Broker’s Playbook Community is where growth happens together.
              </Typography>
              <Box className='create-post-action'>
                <Box className='create-post-icons'>
                  <Button startIcon={<ThumbIcon />}>22</Button>
                  <Button startIcon={<MessageIcon />}>8</Button>
                  <Button startIcon={<ShareIcon />}>Share</Button>
                  <Button 
                    startIcon={<ReplyIcon />} 
                    className='reply-btn'
                    onClick={handleReplyClick}
                  >
                    Reply
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Reply form (only visible when Reply is clicked) */}
          {showReply && (
            <Box className='post-wrapper reply-post'>
              <Avatar aria-label="recipe">BP</Avatar>
              <Stack className='create-post-stack'>
                <FormControl className="survey-form">
                  <FormLabel>Write a Reply</FormLabel>
                  <TextField multiline rows={4} placeholder='Write your reply...' />
                </FormControl>
                <Box className='create-post-action'>
                  <Box className='create-post-icons'>
                    <IconButton aria-label="Emoji"><EmojiIcon /></IconButton>
                    <IconButton aria-label="Image"><ImageIcon /></IconButton>
                    <IconButton aria-label="Attach"><AttchIcon /></IconButton>
                    <IconButton aria-label="Camera"><CamIcon /></IconButton>
                  </Box>
                  <Box>
                  <Button sx={{mr: 2}} variant="outlined" endIcon={<FailIcon />}>
                    Cancel
                  </Button>
                  <Button className='community-btn' variant="contained" endIcon={<PlainIcon />}>
                    Post
                  </Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
          )}
        </Card>
      </Grid>

      {/* Right Sidebar */}
      <Grid className='my-community-right'>
        <Card className='community-card'>
          <Box>
            <CardMedia component="img" image={Communities} />
            <Box className='community-card-media-overlay' />
          </Box>
          <CardContent className='community-content'>
            <Typography gutterBottom variant="h5">
              Broker’s playbook community
            </Typography>
            <Typography gutterBottom variant="body1">
              Broker’s playbook community is your free, all-in-one hub to learn, connect...
            </Typography>
            <Box className='community-peoples'>
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={Ross} />
                <Avatar alt="Cindy Baker" src={Rachel} />
                <Avatar alt="Travis Howard" src={Monica} />
                <Avatar alt="Cindy Baker" src={Rachel} />
                <Avatar alt="Remy Sharp" src={Ross} />
                <Avatar alt="Cindy Baker" src={Rachel} />
                <Avatar alt="Travis Howard" src={Monica} />
                <Avatar alt="Cindy Baker" src={Rachel} />
              </AvatarGroup>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CommunityHome;
