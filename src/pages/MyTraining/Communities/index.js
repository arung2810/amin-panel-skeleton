import React, { useState } from "react";
import { Box, Tabs, Tab, Grid, Card, Typography} from "@mui/material";
import HomeIcon from "../../../assets/images/icons/HomeIcon";
import EventsIcon from "../../../assets/images/icons/EventsIcon";
import AnnouncementsIcon from "../../../assets/images/icons/AnnouncementsIcon";
import IntroductionsIcon from "../../../assets/images/icons/IntroductionsIcon";
import QuestionsIcon from "../../../assets/images/icons/QuestionsIcon";
import LockJoin from "../../../assets/images/icons/LockJoin";
import SpacesIcon from "../../../assets/images/icons/SpacesIcon";
import CommunityHome from "./CommunityHome";

function MyCommunitiesTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid className='community-sidebar-grid'>
        <Card className="community-sidebar">
          <Tabs orientation="vertical" className="sidebar-tabs" value={value} onChange={handleChange} sx={{width: "100%" }}>
            <Tab className="sidebar-tab-single" iconPosition="start" icon={<HomeIcon />} label="Home" />
            <Tab className="sidebar-tab-single" iconPosition="start" icon={<EventsIcon />} label="Events" />
            <Tab className="sidebar-tab-single" iconPosition="start" icon={<AnnouncementsIcon />} label="Announcements" />
            <Tab className="sidebar-tab-single" iconPosition="start" icon={<IntroductionsIcon />} label="Introductions" />
            <Tab className="sidebar-tab-single" iconPosition="start" icon={<QuestionsIcon />} label="Questions" />
          </Tabs>
          <Box className="sidebar-spaces">
            <Typography variant="h5">Spaces</Typography>
            <Box className="space-item">
              <Box className="item-icon">
                <SpacesIcon />
                <Box className="item-icon-lock">
                  <LockJoin />
                </Box>
              </Box>
              <Typography variant="body1">The Playbook Community</Typography>
            </Box>
            <Box className="space-item">
              <Box className="item-icon">
                <SpacesIcon />
                <Box className="item-icon-lock">
                  <LockJoin />
                </Box>
              </Box>
              <Typography variant="body1">Private RIPS Community</Typography>
            </Box>
            <Box className="space-item">
              <Box className="item-icon">
                <SpacesIcon />
                <Box className="item-icon-lock">
                  <LockJoin />
                </Box>
              </Box>
              <Typography variant="body1">The Playbook Community</Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
       {value === 0 && <CommunityHome />}
       {value === 1 && <CommunityHome />}
       {value === 2 && <CommunityHome />}
       {value === 3 && <CommunityHome />}
    </Grid>
  );
}

export default MyCommunitiesTab;
